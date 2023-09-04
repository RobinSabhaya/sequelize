const express = require("express");
const auth = require("../middlewares/auth");
const route = express.Router();
const { all } = require("../controllers/allController");

// route.use(auth);
route.get("/", all);
module.exports = route;
