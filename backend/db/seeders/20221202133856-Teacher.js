'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const Teacherss = [
      {
        name: 'Юлия',
        surname: 'Белова',
        direction: 'Латина',
        experience: 10,
        description: 'Меня зовут Юлия Евгеньевна Белова. Я – балерина Большого Театра и преподаватель Школы балета "Гармония". Окончила Московскую государственную академию хореографии (класс заслуженного деятеля искусств, профессора Т.А. Гальцевой). Солистка балета Московского академического Музыкального театра им. К.С. Станиславского и Вл.И. Немировича-Данченко, в котором исполняла весь классический и современный репертуар. Сейчас являюсь балериной Большого Театра. Имею большой сценический и педагогический опыт. Я уверенна, что занятия балетом будут полезны каждой девочке потому, что дарят красивую осанку и грацию. Уроки классического танца для детей – это лучшие занятия для воспитания сильного характера. На своих классах я обращаю особое внимание на безопасность и психологический комфорт каждого ученика.',
        photo: 'https://balletschoolharmony.ru/wp-content/uploads/2020/09/%D0%91%D0%B5%D0%BB%D0%BE%D0%B2%D0%B0-%D0%AE%D0%BB%D0%B8%D1%8F-%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D1%8C%D0%B5%D0%B2%D0%BD%D0%B0-683x1024.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мария',
        surname: 'Горовенко',
        direction: 'Стандарт',
        experience: 3,
        description: 'Меня зовут Марина Юрьевна Горовенко. Я - преподаватель Школы балета «Гармония Образование получила по специальности «Артист балета и преподаватель» в Красногорском Хореографическом училище. Имею опыт работы на профессиональной сцене в спектаклях Театра Русский балет под руководством Народного артиста СССР Гордеева В.М.и Театра балета Возрождение. Сейчас получаю высшее образование в Московском Институте Психоанализа по специальности педагог- психолог, и уже активно применяю полученные знания в работе. Я преподаю с огромным удовольствием, так как вижу результат своих трудов - красоту осанки учеников, их уверенность в себе и положительные эмоции. Занятия балетом прививают детям внутреннюю культуру, развивают координацию и воображение, а взрослым дарят красоту и здоровье. Я всегда стремлюсь проводить уроки интересно и эффективно и нахожу индивидуальный подход к каждому.С большим интересом принимаю опыт старших коллег, учусь и развиваюсь, потому что люблю свою профессию и хочу быть полезной каждому моему ученику. До встречи в зале!',
        photo: 'https://balletschoolharmony.ru/wp-content/uploads/2020/11/IMG_9708-683x1024.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ксения',
        surname: 'Стовпец',
        direction: 'Стандарт',
        experience: 5,
        description: 'Меня зовут Стовпец Кристина Витальевна. Я — преподаватель Школы балета «Гармония». Окончила Московскую Государственную Академию Хореографии и получила диплом по специальности «Артист Балета, преподаватель». В течение 8 лет я выступала на сценах Большого театра, Музыкального театра им. К. С. Станиславского и им. В. И. Немировича-Данченко, Кремлёвского дворца. Я исполняла сольные партии в балетах «Щелкунчик» и «Тщетная предосторожность». Участвовала в Гала-концерте, посвящённом открытию исторической сцены Большого театра после реконструкции. Ещё во время обучения в Академии я осознала, как важна роль преподавателя, наставника. Я выбрала эту профессию, потому что уверенна, что у каждого ребёнка есть талант, и для меня очень важно помочь этому таланту раскрыться! Я люблю нашу Школу и своих учеников! До встречи в балетных залах!',
        photo: 'https://balletschoolharmony.ru/wp-content/uploads/2020/09/%D0%A1%D1%82%D0%BE%D0%B2%D0%BF%D0%B5%D1%86-%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BD%D0%B0-%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D1%8C%D0%B5%D0%B2%D0%BD%D0%B0-683x1024.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('Teachers', Teacherss)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('Teachers')
  }
}
