const customer = require("../db/models/customerSchema");
const order = require("../db/models/orderSchema");
const orderItem = require("../db/models/itemSchema");
const product = require("../db/models/productSchema");
const orderController = {
  async getOrder(req, res) {
    try {
      const orderData = await order.findAll({
        include: [
          {
            model: customer,
          },
        ],
      });

      return res.json({
        status: 200,
        orderData: orderData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },
  async postOrder(req, res) {
    const { customerId, totalAmount, orderItems } = req.body;
    if (req.xhr) {
      try {
        const orderData = await order.create({
          totalAmount: totalAmount,
          customerId: customerId,
        });
        orderItems.forEach(async (item) => {
          await orderItem.create({
            qty: item.qty,
            price: item.price,
            productId: item.productId,
            orderId: orderData.id,
          });
        });
        return res.status(201).json({
          status: 200,
          message: "order created successfully",
          orderData: orderData,
        });
      } catch (err) {
        return res.json({
          status: 400,
          err: err.message,
        });
      }
    }
    try {
      const orderData = await order.create({
        totalAmount: totalAmount,
        customerId: customerId,
      });
      orderItems.forEach(async (item) => {
        await orderItem.create({
          qty: item.qty,
          price: item.price,
          productId: item.productId,
          orderId: orderData.id,
        });
      });
      return res.status(302).redirect("/order");
    } catch (err) {
      return res.json({
        status: 400,
        message: err.message,
      });
    }
  },
  async updateOrder(req, res) {
    const { id } = req.params;
    if (req.xhr) {
      try {
        const orderData = await order.update(req.body, {
          where: {
            id: id,
          },
        });
        return res.status(200).json({
          status: 200,
          message: "order updated successfully",
          orderData: orderData,
        });
      } catch (err) {
        return res.json({
          status: 400,
          err: err.message,
        });
      }
    }
  },
  async deleteOrder(req, res) {
    const { id } = req.params;
    if (req.xhr) {
      try {
        const orderData = await order.destroy({ where: { id: id } });
        return res.status(200).json({
          status: 200,
          message: "order deleted successfully",
          orderData: orderData,
        });
      } catch (err) {
        return res.json({
          status: 400,
          err: err.message,
        });
      }
    }
    try {
      await order.destroy({ where: { id: id } });
      return res.status(302).redirect("/order");
    } catch (err) {
      return res.json({
        status: 400,
        message: err.message,
      });
    }
  },

  async getOne(req, res) {
    const { id } = req.params;
    if (req.xhr) {
      try {
        const orderData = await order.findOne({
          where: { id: id },
          include: { model: customer },
        });

        const orderItemData = await orderItem.findAll({
          where: {
            orderId: orderData.id,
          },
          include: [
            {
              model: product,
            },
          ],
        });
        return res.json({
          status: 200,
          orderData: orderData,
          orderItemData: orderItemData,
        });
      } catch (err) {
        return res.json({
          status: 400,
          err: err.message,
        });
      }
    }
    try {
      const customerData = await customer.findAll();
      const orderData = await order.findOne({ where: { id: id } });
      const orderItemData = await orderItem.findAll({
        where: {
          orderId: orderData.id,
        },
        include: [
          {
            model: product,
          },
        ],
      });
      const productData = await product.findAll();
      return res.status(200).render("updateorder", {
        orderData: orderData,
        customerData: customerData,
        orderItemData: orderItemData,
        productData: productData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        message: err.message,
      });
    }
  },

  async updatePost(req, res) {
    const { id } = req.params;
    try {
      const orderData = await order.update(req.body, { where: { id: id } });
      await orderItem.update(req.body.orderItem, {
        where: { orderId: orderData.id },
      });
      return res.status(302).redirect("/orderitem");
    } catch (err) {
      return res.json({
        status: 400,
        message: err.message,
      });
    }
  },
  async getDelete(req, res) {
    return res.status(200).render("delete");
  },

  async postDelete(req, res) {
    const { id } = req.params;
    await order.destroy({ where: { id: id } });
    return res.status(302).redirect("/order");
  },
};

module.exports = orderController;
