const router = require('express').Router()
const { Student } = require('../db/models')
const path = require('path')

router.put('/', async (req, res) => {
  const { user_id } = req.session

  const { name, surname, age, phone, email } = req.body
  const student = await Student.findOne({ where: { id: user_id } })
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

router.post('/avatar', async (req, res) => {
  const { user_id } = req.session
  const student = await Student.findOne({ where: { id: user_id } })
  const fileArray = (Array.isArray(req.files.avatar)) ? req.files.avatar : [req.files.avatar]
  const newArr = fileArray.map((ph) => {
    const fileSize = ph.size
    const extension = path.extname(ph.name)
    const allowedExtensions = /.png|.jpeg|.jpg|.gif|.webp/
    if (!allowedExtensions.test(extension)) {
      return ('Недопустимое разрешение файла')
    }
    if (fileSize > 10000000) {
      return ('Размер файла не должен превышать 10MB')
    }
    const { md5 } = ph
    student.image = `${md5}${extension}`
    student.save()
    const URL = `/upload/${md5}${extension}`

    ph.mv(`./public${URL}`, (err) => {
      if (err) { return res.status(500).send(err) }
      return URL
    })
    return URL
  })
  res.json(newArr)
})

module.exports = router
