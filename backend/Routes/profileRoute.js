const router = require('express').Router()
const { Student } = require('../db/models')

router.put('/', async (req, res) => {
  const { name, surname, age, phone, email } = req.body
  const student = await Student.findOne({ where: { email } })
  try {
    if (!name.trim() || !surname.trim() || !age.trim() || !phone.trim() || !email.trim()) {
      return res.status(404).json({ status: 'error', message: 'Все поля нужно заполнить' })
    }
    student.name = name
    student.surname = surname
    student.age = age
    student.phone = phone
    student.email = email
    student.save()
    return res.status(202).json(student)
  } catch (error) { res.status(500).json({ message: error.message }) }
})

module.exports = router
