const { Tournament, Tourlist } = require('../db/models')
const { Student } = require('../db/models')

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
  const { user_id } = req.session
  const admin = await Student.findOne({ where: { role: 'admin' } })
  try {
    if (user_id !== Number(admin.student_id)) {
      return res.status(404)
    }
    const { id } = req.params
    const tournamentDestoy = await Tournament.destroy({ where: { id } })
    res.status(202).json(tournamentDestoy)
  } catch (error) { res.status(500).json({ message: error.message }) }
}).put('/:id', async (req, res) => {
  const { user_id } = req.session
  const admin = await Student.findOne({ where: { role: 'admin' } })
  const { id } = req.params
  const { date, tour_name, place, points } = req.body
  try {
    if (user_id !== Number(admin.student_id)) {
      return res.status(404)
    }
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

router.post('/record', async (req, res) => {
  const { student_id, tournament_id } = req.body
  try {
    const tourlist = await Tourlist.create({
      student_id,
      tournament_id
    })
    return res.status(201).json(tourlist)
  } catch (error) { res.json({ message: error.message }) }
})

module.exports = router
