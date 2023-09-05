const customer = require("../db/models/customerSchema");
const orderItem = require("../db/models/itemSchema");
const order = require("../db/models/orderSchema");
const product = require("../db/models/productSchema");
const customerController = {
  async getCustomer(req, res) {
    const customerData = await customer.findAll();
    // return res.status(200).render('customer');
    return res.status(200).json({
      status: 200,
      customerData: customerData,
    });
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const customerData = await customer.findOne({
        where: {
          id: id,
        },
      });
      return res.status(200).json({
        staus: 200,
        message: "success",
        customerData: customerData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },
  async postCustomer(req, res) {
    try {
      // const {name,email,address,mobile} = req.body;
      const customerData = await customer.create(req.body);
      //    return res.status(301).redirect('/order');
      return res.status(200).json({
        status: 201,
        message: "Customer created successfully",
        customerData: customerData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },

  async updateCustomer(req, res) {
    try {
      const { id } = req.params;
      const customerData = await customer.update(req.body, {
        where: {
          id: id,
        },
      });
      //    return res.status(301).redirect('/all')
      return res.status(200).json({
        status: 200,
        message: "customer updated successfully",
        customerData: customerData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },
  async deleteCustomer(req, res) {
    try {
      const { id } = req.params;
      const customerData = await customer.destroy({ where: { id: id } });
      return res.status(200).json({
        status: 200,
        message: "customer deleted successfully",
        customerData: customerData,
      });
    } catch (err) {
      return res.json({
        status: 400,
        err: err.message,
      });
    }
  },
};

module.exports = customerController;
