const { News } = require('../db/models')

const router = require('express').Router()

router.get('/news', async (req, res) => {
  try {
    const news = await News.findAll({
      raw: true
    })
    res.status(200).json(news)
  } catch (error) {
    res.status(error.status).json({ error: error.message })
  }
})

module.exports = router
