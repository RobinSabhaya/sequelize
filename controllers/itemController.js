const orderItem = require("../db/models/itemSchema");
const product = require("../db/models/productSchema");
const order = require("../db/models/orderSchema");
const customer = require("../db/models/customerSchema");
const itemController = {
  async getItem(req, res) {
    const orderData = await orderItem.findAll({
      include: [
        {
          model: product,
        },
        {
          model: order,
        },
      ],
      attributes: ["id", "qty", "price"],
    });
    return res.status(200).json({
      status: 200,
      message: "success",
      orderData: orderData,
    });
  },
  async postItem(req, res) {
    try {
      const orderData = await orderItem.create(req.body);
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
      const orderData = await orderItem.update(req.body, {
        where: { id: id },
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
