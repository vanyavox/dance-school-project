const router = require('express').Router()
const bcrypt = require('bcrypt')
const { Student } = require('../db/models')

router.get('/user', async (req, res) => {
  const { user_id } = req.session
  console.log(req.session)
  const user = await Student.findOne({ where: { id: user_id } })
  // // console.log(res.locals.user)
  if (user) {
    res.json({ user, isLoggedIn: true })
  } else {
    res.json({ isLoggedIn: false })
  }
})

router.post('/registration', async (req, res) => {
  const {
    name, email, password, passwordRepit
  } = req.body
  console.log(name, email, password, passwordRepit)
  try {
    if (password && email && name && passwordRepit) {
      const user = await Student.findOne({ where: { email } })
      if (user) {
        res.json({ status: 'error login', message: 'Такой пользователь уже зарегистрирован' })
        return
      }
      if (password.length < 8) {
        res.json({ status: 'error password', message: 'Пароль должен содержать не менее 8 символов' })
        return
      }
      if (password === passwordRepit) {
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await Student.create({ name, email, password: hashPassword, role: 'student' })
        req.session.user_id = newUser.id
        res.status(200).json({ message: 'Пользователь зарегистрирован', user: newUser })
      } else {
        res.json({ status: 'error confirm', message: 'Пароли не совпадают' })
        return
      }
    } else {
      res.json({ status: 'error empty', message: 'Заполните все поля' })
    }
  } catch (error) {
    console.log(error.message)
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await Student.findOne({ where: { email } })
    if (!user) {
      return res.json({ status: 'user not found', message: 'Такого пользователя нет в системе' })
    }
    const passwordHash = await bcrypt.compare(password, user.password)
    if (!passwordHash) {
      return res.json({ status: 'error', message: 'Неверный логин или пароль' })
    }
    req.session.user_id = user.id
    res.json({ status: true, user })
  } catch (error) {
    res.json({ status: false })
    console.log(error.message)
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.clearCookie('user_sid').json({ message: 'Session destroy' }))
})

module.exports = router
