const store = require('./store');
const controller = require('./controller');

const injectedStore = store;

module.exports = controller(injectedStore);
