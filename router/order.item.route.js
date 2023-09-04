const express = require("express");

const route = express.Router();

const { getItem, getOne, postItem } = require("../controllers/itemController");

route.get("/", getItem);
route.post("/", postItem);
route.get("/:id", getOne);

module.exports = route;
