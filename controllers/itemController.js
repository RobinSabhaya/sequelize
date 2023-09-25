const orderItem = require("../db/models/itemSchema");
const product = require("../db/models/productSchema");
const order = require("../db/models/orderSchema");
const customer = require("../db/models/customerSchema");
const itemController = {
  async getItem(req, res) {
    if (req.xhr) {
      try {
        const orderData = await orderItem.findAll({
          include: [
            {
              model: product,
            },
            {
              model: order,
              include: [
                {
                  model: customer,
                },
              ],
            },
          ],
          attributes: ["id", "qty", "price"],
        });
        return res.status(200).json({
          status: 200,
          message: "success",
          orderData: orderData,
        });
      } catch (err) {
        return res.json({
          status: 400,
          message: err.message,
        });
      }
    }
    try {
      const itemData = await orderItem.findAll({
        include: [
          {
            model: product,
          },
          {
            model: order,
          },
        ],
      });
      const orderData = await order.findAll({
        include: [
          {
            model: customer,
          },
        ],
      });
      const productData = await product.findAll();
      const customerData = await customer.findAll();
      return res.status(200).render("orderitem", {
        itemData: itemData,
        orderData: orderData,
        productData: productData,
        customerData: customerData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        message: err.message,
      });
    }
  },
  async postItem(req, res) {
    if (req.xhr) {
      try {
        const orderData = await orderItem.bulkCreate(req.body);
        return res.status(201).json({
          status: 200,
          message: "orderitem created successfully",
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
      await orderItem.bulkCreate(req.body);
      return res.status(302).redirect("/orderitem");
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },
  async getOne(req, res) {
    const { id } = req.params;
    const orderData = await orderItem.findOne({
      where: { id: id },
      include: [
        {
          model: product,
        },
        {
          model: order,
          include: {
            model: customer,
          },
        },
      ],
    });
    return res.status(201).json({
      status: 200,
      orderData: orderData,
    });
  },

  async deleteItem(req, res) {
    try {
      const { id } = req.params;
      const orderData = await orderItem.destroy({ where: { id: id } });
      return res.json({
        status: 200,
        message: "orderItem deleted successfully",
        orderData: orderData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },

  async updateItem(req, res) {
    try {
      const { id } = req.params;
      const reqData = req.body.orderItems;
      const orderData = await order.update(
        { totalAmount: req.body.totalAmount, customerId: req.body.customerId },
        {
          where: { id: id },
        }
      );
      reqData.forEach(async (ele) => {
        if (ele.hasOwnProperty("id")) {
          const orderData = await orderItem.update(ele, {
            where: { id: ele.id },
          });
        } else {
          ele.orderId = id;
          const itemData = await orderItem.create(ele);
        }
      });

      return res.json({
        status: 200,
        message: "orderItem updated successfully",
        orderData: orderData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },
};

module.exports = itemController;
