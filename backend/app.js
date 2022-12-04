require('dotenv').config()

const express = require('express')

const configApp = require('./config/serverConfig')

const app = express()
const port = process.env.PORT || 5000
configApp(app)

const NewsApiRoute = require('./Routes/NewsApiRoute')
const teacherRoute = require('./Routes/api')

app.use('/api', NewsApiRoute)
app.use('/api/teachers', teacherRoute)

app.listen(port, () => {
  console.log(`Я поехал на порту: ${port}`)
})
