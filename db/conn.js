const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  host: "localhost",
  database: "sequelize",
  username: "root",
  password: "",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => console.log(err));

//Automatic create table
sequelize.sync();

module.exports = sequelize;
