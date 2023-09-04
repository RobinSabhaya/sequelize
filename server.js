require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8000;
const auth = require("./middlewares/auth");
const cors = require("cors");
const route = require("./router/index");
const apiRoute = require("./router");
const productController = require("./controllers/productController");
const orderController = require("./controllers/orderController");
const itemController = require("./controllers/itemController");
const customerController = require("./controllers/customerController");
const adminController = require("./controllers/adminController");
const loginController = require("./controllers/loginController");
// const error = require('./error/error');
require("./db/conn");
const app = express();

app.use(cors());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);
route.use("/api", apiRoute);

route.post("/admin", auth, adminController.postAdmin);
route.post("/login", loginController.postLogin);

app.listen(PORT, () => {
  console.log(`Express listening on http://localhost:${PORT}/product`);
});
