require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  servicesUser: {
    port: process.env.PORT_CATEGORIES || 3000,
  },
  servicesCategories: {
    port: process.env.PORT_USER || 4000,
  },
  db: {
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB
  }
}

module.exports = config;
