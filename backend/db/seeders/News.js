'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const News = [
      {
        title: 'Dance Blog 1 ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        news_type: 'Актуальное',
        image: 'http://demo.dancesites.co/wp-content/uploads/2019/03/img-gallery3.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dance Blog 2 ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        news_type: 'Актуальное',
        image: 'http://demo.dancesites.co/wp-content/uploads/2019/03/img-gallery5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dance Blog 3 ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        news_type: 'Актуальное',
        image: 'http://demo.dancesites.co/wp-content/uploads/2019/03/img-gallery1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Major',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        news_type: 'Турнир',
        image: 'https://quberten.ru/sites/default/files/styles/cover/public/major_pride-topper-06-01.png?itok=Sxte-m6t',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pickem',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        news_type: 'Турнир',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkMt3q3-uutDEw8169BYp6oFr0AjaXRfYX1wHuYzfG06yae_MfTs6oFip4ItmI5At5mk&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'International',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        news_type: 'Турнир',
        image: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0004/9375/brand.gif?itok=ervlcwhB',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('News', News)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News')
  }
}
