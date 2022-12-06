'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate ({ Lesson, Request, Tourlist }) {
      Student.hasMany(Lesson, { foreignKey: 'student_id' })
      Student.hasOne(Request, { foreignKey: 'student_id' })
      Student.hasMany(Tourlist, { foreignKey: 'student_id' })
    }
  }
  Student.init({
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
      type: DataTypes.TEXT
    },
    age: {
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    phone: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    },
    partner_id: {
      type: DataTypes.INTEGER
    },
    user_points: {
      type: DataTypes.INTEGER
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
    modelName: 'Student'
  })
  return Student
}
