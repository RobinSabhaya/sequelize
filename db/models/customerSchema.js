const { DataTypes } = require('sequelize')
const sequelize = require('../conn');

const customer = sequelize.define("customer",{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    address : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    mobile : {
        type : DataTypes.STRING,
        allowNull : false,
    },
},{
    tableName : 'customer'
});
module.exports = customer;