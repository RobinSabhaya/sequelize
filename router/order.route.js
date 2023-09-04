const express = require("express");

const route = express.Router();

const {
  getOrder,
  postOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");

route.get("/", getOrder);
route.post("/", postOrder);
route.patch("/:id", updateOrder);
route.delete("/:id", deleteOrder);

module.exports = route;
