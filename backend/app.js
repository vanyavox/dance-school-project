require('dotenv').config()

const express = require('express')

const configApp = require('./config/serverConfig')

const app = express()
const port = process.env.PORT || 5000
configApp(app)

const apiRoute = require('./Routes/apiRoute')
const teacherRoute = require('./Routes/apiTeacher')
const requestRoute = require('./Routes/apiRequest')
app.use('/api', apiRoute)
app.use('/api/teachers', teacherRoute)
app.use('/api/requests', requestRoute)

app.listen(port, () => {
  console.log(`Я поехал на порту: ${port}`)
})
