const { Tournament } = require('../db/models')
const router = require('express').Router()

router
  .get('/', async (req, res) => {
    try {
      const tournaments = await Tournament.findAll({
        raw: true
      })
      res.status(200).json(tournaments)
    } catch (error) {
      res.status(error.status).json({ error: error.message })
    }
  })
  .post('/', async (req, res) => {
    const {
      tour_name,
      place,
      date
    } = req.body

    const newTour = await Tournament.create({
      tour_name,
      place,
      date

    })
    res.status(200).json({ message: 'Произошла запись', status: newTour })
  }

  )

module.exports = router
