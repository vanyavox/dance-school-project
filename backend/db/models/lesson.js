'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Student, Teacher }) {
      Lesson.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE', });
      Lesson.belongsTo(Teacher, { foreignKey: 'teacher_id', onDelete: 'CASCADE', });
    }
  }
  Lesson.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Teachers',
        key: 'id',
      },
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Students',
        key: 'id',
      },
    },
    day: {
      type: DataTypes.INTEGER
    },
    time: {
      type: DataTypes.TEXT
    },
    lesson_type: {
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
    modelName: 'Lesson',
  });
  return Lesson;
};