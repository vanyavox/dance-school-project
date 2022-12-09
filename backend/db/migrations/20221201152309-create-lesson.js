'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teachers',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Students',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      monday: {
        type: Sequelize.TEXT
      },
      tuesday: {
        type: Sequelize.TEXT
      },
      wednesday: {
        type: Sequelize.TEXT
      },
      thursday: {
        type: Sequelize.TEXT
      },
      friday: {
        type: Sequelize.TEXT
      },
      saturday: {
        type: Sequelize.TEXT
      },
      sunday: {
        type: Sequelize.TEXT
      },
      lesson_type: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Lessons')
  }
}
