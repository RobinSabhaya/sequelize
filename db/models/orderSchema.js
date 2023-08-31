const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../conn');
const customer = require('../models/customerSchema')
const orderItem = require('../models/itemSchema');
const product = require('./productSchema');

const order = sequelize.define("orderTable",{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true,
    },
    date : {
        type : DataTypes.STRING,
        defaultValue : new Date().getDate(),
        allowNull : false
    },
    totalAmount : {
        type : DataTypes.INTEGER,
        allowNull : false, 
    },
    customerId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : 'customer',
            key : "id"
        }
    },

},{
    tableName : "orderTable"
});

module.exports = order;

