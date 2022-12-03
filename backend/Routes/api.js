const router = require('express').Router()
const { Teacher } = require('../db/models')

router
  .get('/', async (req, res) => {
    try {
      const teachers = await Teacher.findAll({ raw: true })
      res.json(teachers)
    } catch (e) { console.log(e.message) }
  })

module.exports = router
