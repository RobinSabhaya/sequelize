const customer = require("../db/models/customerSchema");
const customerController = {
  async getCustomer(req, res) {
    if (req.xhr) {
      const customerData = await customer.findAll();
      return res.status(200).json({
        status: 200,
        customerData: customerData,
      });
    }
    const customerData = await customer.findAll();
    return res.status(200).render("customer", { customerData: customerData });
  },
  async getOne(req, res) {
    if (req.xhr) {
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
    }
    const { id } = req.params;
    const customerData = await customer.findOne({
      where: {
        id: id,
      },
    });
    return res
      .status(200)
      .render("updateCustomer", { customerData: customerData });
  },
  async postCustomer(req, res) {
    if (req.xhr) {
      try {
        const customerData = await customer.create(req.body);
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
    }
    await customer.create(req.body);
    return res.status(302).redirect("/customer");
  },

  async updateCustomer(req, res) {
    if (req.xhr) {
      try {
        const { id } = req.params;
        const customerData = await customer.update(req.body, {
          where: {
            id: id,
          },
        });
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
    }
    const { id } = req.params;
    const customerData = await customer.findOne({
      where: { id: id },
    });
    customer.update({ where: { id: id } }, req.body);
    return res.status(200).render("updateCustomer", customerData);
  },
  async deleteCustomer(req, res) {
    if (req.xhr) {
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
    }
  },

  async updatePost(req, res) {
    const { id } = req.params;
    await customer.update(req.body, { where: { id: id } });
    return res.status(302).redirect("/customer");
  },

  async getDelete(req, res) {
    return res.status(200).render("delete");
  },

  async postDelete(req, res) {
    const { id } = req.params;
    await customer.destroy({ where: { id: id } });
    return res.status(302).redirect("/customer");
  },
};

module.exports = customerController;
