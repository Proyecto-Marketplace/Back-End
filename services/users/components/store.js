const {models} = require('../../../libs/sequelize');
const modelUser = models.User;

class storeUser {

  constructor(){

  }

  async find() {
    const data = await modelUser.findAll();
    return data;
  }

  async findId(id) {
    const data = await modelUser.findByPk(id);
    return data;
  }

  async create(data) {
    const newUser = await modelUser.create(data);
    return newUser;
  }

  async update(id, data) {
    const user = await this.findId(id);
    if(!user) throw 'user not found';
    await user.update(data);
    return user;
  }

  async delete(id) {
    const user = await this.findId(id);
    if(!user) throw 'user not found';
    await user.destroy();
    return user;
  }

}

module.exports = storeUser;
