const sequelize = require('../../../libs/sequelize');

class storeCategories {

  constructor(){

  }

  async find() {
    const query = 'select * from task';
    const [data] = await sequelize.query(query);
    return data;
  }

}

module.exports = storeCategories;
