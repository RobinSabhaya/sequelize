const express = require("express");
const auth = require("../middlewares/auth");
const {
  getOrder,
  postOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");
const route = express.Router();

// route.use(auth);
route.get("/", getOrder);
route.post("/", postOrder);
route.put("/:id", updateOrder);
route.delete("/:id", deleteOrder);

module.exports = route;
