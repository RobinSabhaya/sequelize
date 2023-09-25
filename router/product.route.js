const express = require("express");
const auth = require("../middlewares/auth");
const {
  getOne,
  postProduct,
  updateProduct,
  deleteProduct,
  allProduct,
  updatePost,
} = require("../controllers/productController");
const route = express.Router();

// route.use(auth);
route.get("/:id", getOne);
route.post("/", postProduct);
route.put("/:id", updateProduct);
route.delete("/:id", deleteProduct);
route.get("/", allProduct);
route.post("/:id", updatePost);

module.exports = route;
