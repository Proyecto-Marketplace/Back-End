const { Model, DataTypes, Sequelize } = require('sequelize');
const TABLE_NAME = 'categories';

const CategorieSchema = {
  idCategory: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'id_category'
  },
  nameCategory: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'name_category'
  },
  descriptionCategory: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "description_category"
  },
  imageCategory: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'image_category'
  },
  // idSeller: {
  //   allowNull: false,
  //   type: DataTypes.INTERGER,
  //   references: {
  //     model: Seller,
  //     key: 'id_seller'
  //   },
  //   fielt: 'id_seller'
  // },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Categories extends Model {
  static associate() {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: 'Categories',
      timestamps: false
    }
  }
}

module.exports = { TABLE_NAME, CategorieSchema, Categories }
