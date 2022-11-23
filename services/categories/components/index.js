const store = require('../../../store/categoriesPostgres');
const controller = require('./controller');

const injectedStore = store;

module.exports = controller(injectedStore);
