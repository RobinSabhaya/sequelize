const { DataTypes } = require("sequelize");
const sequelize = require("../conn");
const customer = require("../models/customerSchema");

const order = sequelize.define(
  "orderTable",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_date: {
      type: DataTypes.STRING,
      defaultValue: new Date().getDate(),
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "orderTable",
  }
);

customer.hasOne(order, {
  foreignKey: "customerId",
});
order.belongsTo(customer);

module.exports = order;
