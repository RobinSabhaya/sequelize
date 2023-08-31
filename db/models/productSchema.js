const {DataTypes,Sequelize} = require('sequelize');
const sequelize = require('../conn')
const product = sequelize.define("product",{
    productid : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
        
    },
    price : {
        type : DataTypes.STRING,
        allowNull : false,
    }
},{
    tableName : "product",
});

module.exports = product;