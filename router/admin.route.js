const express = require("express");
const { postAdmin } = require("../controllers/adminController");
// const admin = require("../middlewares/admin");
const route = express.Router();

route.post("/", postAdmin);

module.exports = route;
