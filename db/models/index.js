const { User, UserSchema } = require('./user.model');
const { Categories, CategorieSchema } = require('./categories.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Categories.init(CategorieSchema, Categories.config(sequelize));
}

module.exports = setupModels;
