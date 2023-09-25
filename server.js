require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const route = require("./router/index");
const apiRoute = require("./router");
require("./db/conn");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);
app.set("view engine", "ejs");
app.set("views", [
  "views/customer",
  "views/product",
  "views/order",
  "views/orderitem",
]);
route.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log(`Express listening on http://localhost:${PORT}/product`);
});
