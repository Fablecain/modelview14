// config/connection.js
const { Sequelize } = require('sequelize');
const config = require('./config').development; // Adjusted to require the JS file and specific environment

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

module.exports = sequelize;

