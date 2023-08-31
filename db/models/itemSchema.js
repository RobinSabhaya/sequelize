const {DataTypes} = require('sequelize')
const sequelize = require('../conn');
const product = require('./productSchema');
const orderItem = sequelize.define("orderItem",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
    },
    productId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "product",
            key : "productid"
        }
    },
    qty : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : false,
    }
},{
    tableName : "orderItem"
});



module.exports = orderItem;