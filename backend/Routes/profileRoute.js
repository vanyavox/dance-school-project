const router = require('express').Router()
const { Student } = require('../db/models')

router.put('/', async (req, res) => {
  const { user } = res.locals
  const { name, surname, age, phone, email } = req.body
  try {
    const student = await Student.update({
      name,
      surname,
      age,
      phone,
      email
    }, { where: { id: user.id } })
    return res.status(202).json(student)
  } catch (error) { res.status(500).json({ message: error.message }) }
})

module.exports = router
