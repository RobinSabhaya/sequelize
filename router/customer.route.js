const express = require("express");
const {
  deleteCustomer,
  getCustomer,
  getOne,
  postCustomer,
  updateCustomer,
  updatePost,
  getDelete,
  postDelete,
} = require("../controllers/customerController");
const route = express.Router();
const auth = require("../middlewares/auth");

// route.use(auth);
route.get("/", getCustomer);
route.post("/", postCustomer);
route.put("/:id", updateCustomer);
route.delete("/:id", deleteCustomer);
route.get("/:id", getOne);
route.post("/:id", updatePost);
route.get("/deletecustomer/:id", getDelete);
route.post("/deletecustomer/:id", postDelete);

module.exports = route;
