const express = require("express");

const route = express.Router();

const {
  getOne,
  postProduct,
  updateProduct,
  deleteProduct,
  allProduct,
} = require("../controllers/productController");

route.get("/:id", getOne);
route.post("/", postProduct);
route.patch("/:id", updateProduct);
route.delete("/:id", deleteProduct);
route.get("/", allProduct);

module.exports = route;
