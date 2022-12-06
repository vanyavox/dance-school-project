const { Tournament } = require('../db/models')

const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    const tournament = await Tournament.findAll({
      raw: true
    })
    res.status(200).json(tournament)
  } catch (error) {
    res.status(error.status).json({ error: error.message })
  }
}).post('/', async (req, res) => {
  const { date, tour_name, place, points } = req.body
  try {
    const tournament = await Tournament.create({
      date,
      tour_name,
      place,
      points
    })
    res.status(201).json(tournament)
  } catch (error) { res.json({ message: error.message }) }
}).delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const tournamentDestoy = await Tournament.destroy({ where: { id } })
    res.status(202).json(tournamentDestoy)
  } catch (error) { res.status(500).json({ message: error.message }) }
}).put('/:id', async (req, res) => {
  const { id } = req.params
  const { date, tour_name, place, points } = req.body
  try {
    if (date && tour_name && place && points) {
      const tournament = await Tournament.update({
        date,
        tour_name,
        place,
        points
      }, { where: { id } })
      return res.status(202).json(tournament)
    }
    res.status(206).json({ message: 'Partial Content' })
  } catch (error) { res.status(500).json({ message: error.message }) }
})

module.exports = router
