'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate ({ Lesson }) {
      Teacher.hasMany(Lesson, { foreignKey: 'teacher_id' })
    }
  }
  Teacher.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    surname: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    direction: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    experience: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    },
    photo: {
      type: DataTypes.TEXT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Teacher'
  })
  return Teacher
}
