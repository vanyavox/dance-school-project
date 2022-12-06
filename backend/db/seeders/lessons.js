'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const lessons = [
      {
        teacher_id: 1,
        monday: '10-40',
        tuesday: '15-40',
        wednesday: '10-40',
        thursday: '19-40',
        lesson_type: 'any',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_id: 2,
        monday: '12-40',
        tuesday: '19-40',
        sunday: '11-40',
        lesson_type: 'any',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]
    await queryInterface.bulkInsert('Lessons', lessons)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lessons')
  }
}
