const {DataTypes} = require('sequelize')
const sequelize = require('../conn')

const admin = sequelize.define("admin",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    tableName : 'admin'
});

module.exports = admin;