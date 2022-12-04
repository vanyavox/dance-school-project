const { Request } = require('../db/models')

const router = require('express').Router()

router
  .get('/', async (req, res) => {
    try {
      const requests = await Request.findAll({
        raw: true
      })
      res.status(200).json(requests)
    } catch (error) {
      res.status(error.status).json({ error: error.message })
    }
  })
  .post('/', async (req, res) => {
    const {
      name,
      phone,
      lesson_type,
      date,
      time
    } = req.body

    const newRequest = await Request.create({
      name,
      phone,
      lesson_type,
      status: 'Обрабатывается',
      date,
      time
    })
    res.status(200).json({ message: 'Произошла запись', status: newRequest })
  }

  )

module.exports = router
