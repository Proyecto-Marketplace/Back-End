const {models} = require('../../../libs/sequelize');
const modelUser = models.User;

class storeUser {

  constructor(){

  }

  async find() {
    const data = await modelUser.findAll();
    return data;
  }

}

module.exports = storeUser;
