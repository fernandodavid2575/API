const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  dialectOptions: env.host === 'localhost' ? {} : {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
 
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//tabla 
db.Ejemplo = require('../models/ejemplo.model.js')(sequelize, Sequelize);

module.exports = db;