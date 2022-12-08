const { Request } = require('../db/models')
const fetch = require('node-fetch')
const router = require('express').Router()

router
  .get('/', async (req, res) => {
    try {
      const requests = await Request.findAll({
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
    const token = '5583708421:AAFrblNqy0U4SI6Vy2vPyPzcTXIYZ1yHW7A'
    const chatId = '-876189864'
    const text = `Новая заявка: Имя:${name} Телефон: ${phone} Направление: ${lesson_type} Дата: ${date} Время: ${time}`
    console.log(text)
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}@DanceSchool&parse_mode=HTML&text=${text}`)
    res.status(200).json({ message: 'Произошла запись', newreq: newRequest })
  })
  .delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const reqDestoy = await Request.destroy({ where: { id } })
      if (reqDestoy) {
        res.status(202).json(id)
      }
    } catch (error) { res.status(500).json({ message: error.message }) }
  })
  .put('/change/:id', async (req, res) => {
    let newStatus
    const { id } = req.params
    const { status } = req.body
    if (status === 'Обработана') {
      newStatus = 'Обрабатывается'
    } else {
      newStatus = 'Обработана'
    }
    try {
      const request = await Request.findOne({ where: { id: Number(id) } })
      request.status = newStatus
      request.save()
      return res.status(202).json(request)
    } catch (error) { res.status(500).json({ message: error.message }) }
  })

module.exports = router
