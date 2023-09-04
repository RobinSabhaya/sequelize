const order = require("../db/models/orderSchema");
const customer = require("../db/models/customerSchema");
const orderItem = require("../db/models/itemSchema");
const product = require("../db/models/productSchema");
const allController = {
  async all(req, res) {
    try {
      const orderData = await order.findAll({
        attributes: ["id", "date", "totalAmount"],
        include: [
          {
            model: customer,
            attributes: ["name", "email", "address", "mobile"],
          },
          {
            model: orderItem,
            attributes: ["qty", "price"],
            include: {
              model: product,
              attributes: ["name", "price"],
            },
          },
        ],
      });
      // return res.status(200).render('all',{data : data})
      return res.status(200).json({
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
};

module.exports = allController;
