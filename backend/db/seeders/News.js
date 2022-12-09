'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const News = [
      {
        title: 'Огни Большого города 2022',
        description: 'На нашем сайте появилось приглашение на ХХ турнир по танцевальному спорту «Огни большого города». Соревнования пройдут 16,17,18 декабря 2022 г.',
        news_type: 'Турнир',
        image: 'http://danselatine.ch/wp-content/uploads/2017/03/nazaririna-1024x597.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Чемпионат Забайкалья может сорваться без подготовленной площадки',
        description: 'Чемпионат Забайкальского края, намеченный на конец января, может не состояться вовсе из-за отсутствия подходящего комплекса и нехватки денег.',
        news_type: 'Актуальное',
        image: 'https://from-ua.info/wp-content/uploads/2022/09/Skrynshot-26.09.22_11.37.39-720x479.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "GolDen's Cup - 2022, Санкт-Петербург",
        description: "На нашем сайте открыта регистрация на турнир ШБТ в рамках Всероссийского фестиваля танца GolDen's Cup - 2022, который пройдет 11 декабря 2022 года в г. Санкт-Петербург. Турнир является этапом Кубка Российского танцевального союза. \nМесто проведения: Санкт-Петербург, Holiday Inn «Московские ворота», пр.Московский, 97 А",
        news_type: 'Турнир',
        image: 'http://zilcc.ru/wp-content/uploads/2021/12/balnye_tantcy.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Открыта регистрация на турниры',
        description: 'Регистрация доступна на турниры ВАЛЬС ОСЕНИ - 2022, QYZYLORDA CUP - 2022 и BLACK&WHITE - 2022',
        news_type: 'Турнир',
        image: 'https://titul-dance.ru/media/k2/items/cache/92c3523de61d06eebdc515f2babb64b9_Generic.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Международный турнир в Кремле',
        description: 'Полторы тысячи зрителей и больше ста участников. В субботу в Кремлевском дворце проходит второй Кубок Кремля по спортивным бальным танцам, сообщает «МИР 24».\nСреди участников – любители и профессионалы из России и других стран Содружества. Сильнейших в фокстроте и ча-ча-ча выберут арбитры из России, Казахстана, Италии и США. За шесть часов соревнований определят лучшие дуэты в латиноамериканской и европейской программах. Всего на главном паркете страны танцоры поборются за пять кубков.',
        news_type: 'Актуальное',
        image: 'https://i.ibb.co/KsRSpwc/1741303.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('News', News)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News')
  }
}
