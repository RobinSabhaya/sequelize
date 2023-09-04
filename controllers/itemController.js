const orderItem = require("../db/models/itemSchema");
const product = require("../db/models/productSchema");
const itemController = {
  async getItem(req, res) {
    const orderData = await orderItem.findAll({
      include: {
        model: product,
      },
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
  },
  async getOne(req, res) {
    const { id } = req.params;
    const orderData = await orderItem.findOne({
      where: { id: id },
      include: {
        model: product,
      },
    });
    return res.status(201).json({
      status: 200,
      orderData: orderData,
    });
  },
};

module.exports = itemController;
