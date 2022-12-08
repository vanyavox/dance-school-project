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
}).post('/news', async (req, res) => {
  const { title, description, news_type, image } = req.body
  try {
    const news = await News.create({
      title,
      description,
      news_type,
      image
    })
    res.status(201).json(news)
  } catch (error) { res.json({ message: error.message }) }
}).delete('/news/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newsDestoy = await News.destroy({ where: { id } })
    res.status(202).json(newsDestoy)
  } catch (error) { res.status(500).json({ message: error.message }) }
}).put('/news/:id', async (req, res) => {
  const { id } = req.params
  const { title, description, news_type, image } = req.body
  try {
    if (title && description && news_type && image) {
      const news = await News.update({
        title,
        description,
        news_type,
        image
      }, { where: { id } })
      return res.status(202).json(news)
    }
    res.status(206).json({ message: 'Partial Content' })
  } catch (error) { res.status(500).json({ message: error.message }) }
})

module.exports = router
