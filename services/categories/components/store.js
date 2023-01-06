const {models} = require('../../../libs/sequelize');
const modelCategories = models.Categories;

class storeCategories {

  constructor(){

  }

  async find() {
    // const query = 'select * from task';
    // const [data] = await sequelize.query(query);
    const data = await modelCategories.findAll();
    return data;
  }

  async findId(id_category) {
    const data = await modelCategories.findByPk(id_category);
    return data;
  }

  async create(data) {
    const result = await modelCategories.create(data);
    return result;
  }

  async update(data) {
    const result = await modelCategories.update(data, { where: { id_category: data.idCategory } });
    return result;
  }

  async deleteCategory(idCategory) {
    const result = await modelCategories.destroy({ where: { id_category: idCategory } });
    return result;
  }

}

module.exports = storeCategories;
