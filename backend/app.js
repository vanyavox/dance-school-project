require('dotenv').config()

const express = require('express')

const configApp = require('./config/serverConfig')

const apiRoute = require('./Routes/apiRoute')

const app = express()
const port = process.env.PORT || 5000

configApp(app)
app.use('/api', apiRoute)

const teacherRoute = require('./Routes/api')

app.use('/api/teachers', teacherRoute)

app.listen(port, () => {
  console.log(`Я поехал на порту: ${port}`)
})
