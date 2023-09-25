const express = require("express");
const auth = require("../middlewares/auth");
const {
  getOrder,
  postOrder,
  deleteOrder,
  updateOrder,
  getOne,
  updatePost,
  getDelete,
  postDelete,
} = require("../controllers/orderController");
const route = express.Router();

// route.use(auth);
route.get("/", getOrder);
route.post("/", postOrder);
route.put("/:id", updateOrder);
route.post("/:id", updatePost);
route.delete("/:id", deleteOrder);
route.get("/:id", getOne);
route.get("/deleteorder/:id", getDelete);
route.post("/deleteorder/:id", postDelete);

module.exports = route;
