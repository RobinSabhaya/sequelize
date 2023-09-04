const { DataTypes } = require("sequelize");
const sequelize = require("../conn");
const product = require("./productSchema");
const order = require("./orderSchema");
const orderItem = sequelize.define(
  "orderItem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "orderItem",
  }
);

product.hasOne(orderItem, {
  foreignKey: "productId",
});
orderItem.belongsTo(product);

order.hasMany(orderItem, {
  foreignKey: "orderId",
});
orderItem.belongsTo(order);

module.exports = orderItem;
