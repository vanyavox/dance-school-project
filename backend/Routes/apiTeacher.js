const router = require('express').Router()
const { Teacher } = require('../db/models')

router
  .get('/', async (req, res) => {
    try {
      const teachers = await Teacher.findAll({ raw: true })
      res.json(teachers)
    } catch (e) { console.log(e.message) }
  })
  .get('/:id', async (req, res) => {
    const { id } = req.params
    try {
      const teacher = await Teacher.findOne({ where: { id } })
      res.json(teacher)
    } catch (e) { console.log(e.message) }
  })

module.exports = router
