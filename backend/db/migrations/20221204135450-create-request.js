'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      date: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      time: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      lesson_type: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      phone: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      status: {
        type: Sequelize.TEXT,
        allowNull: false
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
    await queryInterface.dropTable('Requests')
  }
}
