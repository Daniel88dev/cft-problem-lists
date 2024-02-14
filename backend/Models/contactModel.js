const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Contact = sequelize.define("Contact", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
});

module.exports = Contact;
