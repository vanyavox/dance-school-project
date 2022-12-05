const { Lesson, Teacher } = require('../db/models')

const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.findAll({
      raw: true
    })
    console.log(lessons)
    res.status(200).json({ lessons, message: 'Lesson found' })
  } catch (error) {
    res.status(error.status).json({ error: error.message })
  }
})
  .put('/:id', async (req, res) => {
    const { id } = req.params
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = req.body
    try {
      const lessons = await Lesson.update({
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
      }, { where: { id } })
      res.status(202).json(lessons)
    } catch (error) { res.status(500).json({ message: error.message }) }
  })

module.exports = router
