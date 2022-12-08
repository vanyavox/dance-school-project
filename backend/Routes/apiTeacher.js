const router = require('express').Router()
const { Teacher, Lesson } = require('../db/models')

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
  .post('/', async (req, res) => {
    const {
      name,
      surname,
      direction,
      experience,
      description,
      photo
    } = req.body

    try {
      const newTeacher = await Teacher.create({
        name,
        surname,
        direction,
        experience,
        description,
        photo
      })
      const newTimeTable = await Lesson.create({
        teacher_id: newTeacher.id,
        lesson_type: newTeacher.direction,
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''
      })
      return res.status(200).json({ message: 'Преподаватель успешно добавлен!', newT: newTeacher })
    } catch (error) { res.status(500).json({ message: error.message }) }
  })
  .put('/teacher/:idd', async (req, res) => {
    const { idd } = req.params
    const {
      name,
      surname,
      direction,
      experience,
      description,
      photo
    } = req.body

    try {
      const changedTeacher = await Teacher.findOne({ where: { id: Number(idd) } })
      console.log(changedTeacher)
      changedTeacher.name = name
      changedTeacher.surname = surname
      changedTeacher.direction = direction
      changedTeacher.experience = experience
      changedTeacher.description = description
      changedTeacher.photo = photo
      changedTeacher.save()
      return res.status(202).json(changedTeacher)
    } catch (error) { res.status(500).json({ message: error.message }) }
  })
  .delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const teacherDestoy = await Teacher.destroy({ where: { id } })
      if (teacherDestoy) {
        res.status(202).json(id)
      }
    } catch (error) { res.status(500).json({ message: error.message }) }
  })

module.exports = router
