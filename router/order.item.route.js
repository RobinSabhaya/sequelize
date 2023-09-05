const express = require("express");
const auth = require("../middlewares/auth");
const {
  getItem,
  getOne,
  postItem,
  deleteItem,
  updateItem,
} = require("../controllers/itemController");
const route = express.Router();

// route.use(auth);
route.get("/", getItem);
route.post("/", postItem);
route.put("/:id", updateItem);
route.get("/:id", getOne);
route.delete("/:id", deleteItem);

module.exports = route;
