require('dotenv').config()

const express = require('express')

const configApp = require('./config/serverConfig')

const app = express()
const port = process.env.PORT || 5000

configApp(app)

app.listen(port, () => {
  console.log(`Я поехал на порту: ${port}`)
})
