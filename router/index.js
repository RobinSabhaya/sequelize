const express = require("express");

const route = express.Router();
const productRoute = require("./product.route");
const orderRoute = require("./order.route");
const customerRoute = require("./customer.route");
const orderItemRoute = require("./order.item.route");
const allRoute = require("./all.route");

route.use("/product", productRoute);
route.use("/order", orderRoute);
route.use("/customer", customerRoute);
route.use("/orderitem", orderItemRoute);
route.use("/all", allRoute);

module.exports = route;
