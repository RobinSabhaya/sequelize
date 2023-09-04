const express = require("express");
const loginController = require("../controllers/loginController");
const route = express.Router();

route.get("/", loginController.getLogin);
route.post("/", loginController.postLogin);

module.exports = route;
