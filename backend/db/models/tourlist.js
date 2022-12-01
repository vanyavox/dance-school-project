'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tourlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Student, Tournament }) {
      Tourlist.belongsTo(Student, { foreignKey: 'student_id',onDelete: 'CASCADE', })
      Tourlist.belongsTo(Tournament, { foreignKey: 'tournament_id',onDelete: 'CASCADE', })
    }
  }
  Tourlist.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Students',
        key: 'id',
      },
    },
    tournament_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tournaments',
        key: 'id',
      },
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
    modelName: 'Tourlist',
  });
  return Tourlist;
};