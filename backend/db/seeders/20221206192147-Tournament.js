'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tournament = [
      {
        date: 'завтра',
        tour_name: 'Танцы',
        place: 'Москва',
        points: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: 'завтра',
        tour_name: 'Танцы',
        place: 'Питер',
        points: 3000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: 'В ноябре',
        tour_name: 'Танцы',
        place: 'Саратов',
        points: 2222,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: 'сегодня',
        tour_name: 'Танцы',
        place: 'Самара',
        points: 2223123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: 'Секта',
        tour_name: 'Танцы',
        place: 'Эльбрус',
        points: 7668,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]
    await queryInterface.bulkInsert('Tournaments', tournament)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tournaments')
  }
}
