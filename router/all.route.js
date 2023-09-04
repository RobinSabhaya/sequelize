const express = require("express");

const route = express.Router();
const { all } = require("../controllers/allController");
route.get("/", all);
module.exports = route;
