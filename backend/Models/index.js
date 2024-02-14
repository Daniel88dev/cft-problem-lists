const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: true,
        enableArithAbort: false,
        cryptoCredentialsDetails: {
          minVersion: "TLSv1",
        },
      },
    },
    define: {
      timestamps: false,
    },
  }
);

module.exports = sequelize;
