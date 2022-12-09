'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tournament = [
      {
        date: '2023-01-22',
        tour_name: 'Кубок кремля',
        place: 'Москва',
        points: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-12-11',
        tour_name: 'QYZYLORDA CUP',
        place: 'Питер',
        points: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-12-13',
        tour_name: 'ВАЛЬС ОСЕНИ',
        place: 'Саратов',
        points: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-12-16',
        tour_name: 'Огни Большого города',
        place: 'Самара',
        points: 235,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2023-01-07',
        tour_name: 'BLACK&WHITE',
        place: 'Питер',
        points: 300,
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
