'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Request.init({
    student_id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    date: DataTypes.TEXT,
    time: DataTypes.TEXT,
    lesson_type: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    status: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};