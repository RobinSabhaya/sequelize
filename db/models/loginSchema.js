const {DataTypes} = require('sequelize');
const sequelize = require('../conn');

const login = sequelize.define('login',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },
    email : {
        type : DataTypes.STRING,
         allowNull : false,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    }
},{
    tableName : "login"
});

module.exports = login;