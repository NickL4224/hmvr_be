const Sequelize = require("sequelize");
const db_config = require("../config/db_config");

const sequelize = new Sequelize(
  db_config.DB,
  db_config.USER,
  db_config.PASSWORD,
  {
    host: db_config.HOST,
    dialect: db_config.dialect,
    pool: {
      max: db_config.pool.max,
      min: db_config.pool.min,
      acquire: db_config.pool.aquire,
      idle: db_config.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.livestock = require("./livestock.model.js")(sequelize, Sequelize);

module.exports = db;
