const TABLA = 'categories';
const injectedStore = require('../../../store/categoriesPostgres');

const list = () => {
  const service = new injectedStore();
  return service.find(TABLA);
  // const data = [{id: "1234", name: "jason"}];
  // return data;
}

module.exports = {
  list,
}
