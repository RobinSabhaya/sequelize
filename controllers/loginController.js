const jwt = require("jsonwebtoken");
const customer = require("../db/models/customerSchema");
const login = require("../db/models/loginSchema");
const loginController = {
  async getLogin(req, res) {
    const loginData = await login.findAll();
    return res.json({
      status: 200,
      loginData: loginData,
    });
  },
  async postLogin(req, res) {
    const { email, password } = req.body;
    const user = await customer.findOne({
      where: {
        email: email,
      },
    });
    if (user?.dataValues?.email === email) {
      const loginData = await login.create({
        email: email,
        password: password,
      });
      const accessToken = await jwt.sign(
        { id: loginData.id, role: "customer" },
        process.env.JWT_SECRET
      );
      return res.status(200).json({
        status: 201,
        message: "Login successfully",
        loginData: loginData,
        accessToken: accessToken,
      });
    }
    return res.status(200).json({
      status: 400,
      message: "user not found",
    });
  },
};

module.exports = loginController;
