const express = require("express");
const auth = require("../middlewares/auth");
const { getItem, getOne, postItem } = require("../controllers/itemController");
const route = express.Router();

// route.use(auth);
route.get("/", getItem);
route.post("/", postItem);
route.get("/:id", getOne);

module.exports = route;
