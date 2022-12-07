const { Sequelize } = require('sequelize');

const config = require('../config/config');
const setupModels = require('../db/models');

const URL = `postgres://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}`;

const sequelize = new Sequelize(URL, {
  dialect: 'postgres',
  logging: true
});

setupModels(sequelize);

// crea la estructura de los modelas de la base de datos
sequelize.sync();

module.exports = sequelize;
