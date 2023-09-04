const express = require("express");

const route = express.Router();
const {
  deleteCustomer,
  getCustomer,
  getOne,
  postCustomer,
  updateCustomer,
} = require("../controllers/customerController");

route.get("/", getCustomer);
route.post("/", postCustomer);
route.patch("/:id", updateCustomer);
route.delete("/:id", deleteCustomer);
route.get("/:id", getOne);

module.exports = route;
