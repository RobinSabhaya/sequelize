const express = require("express");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");
const route = express.Router();
const { all } = require("../controllers/allController");

route.use([auth, admin]);

route.get("/", all);
module.exports = route;
