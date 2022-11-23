const sequelize = require('../libs/sequelize');

class categoriesPostgres {

  constructor(){

  }

  async find() {
    const query = 'select * from tasks';
    const [data] = await sequelize.query(query);
    return data;
  }

}

module.exports = categoriesPostgres;
