'use strict'
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [{
      name: 'Rulon',
      surname: 'Oboev',
      age: '47',
      email: 'admin@admin.ru',
      password: await bcrypt.hash('12345', 10),
      phone: '+791100102334',
      role: 'admin',
      image: '1573725783_1.jpeg',
      partner_id: 'Leila G.',
      user_points: '1700',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {})
  }
}
