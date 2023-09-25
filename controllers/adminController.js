const admin = require("../db/models/adminSchema");
const adminController = {
  async postAdmin(req, res) {
    const adminData = await admin.create(req.body);
    return res.status(201).json({
      status: 200,
      message: "admin created successfully",
      adminData: adminData,
    });
  },
};

module.exports = adminController;
