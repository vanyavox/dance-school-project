require('dotenv').config()

const express = require('express')

const configApp = require('./config/serverConfig')

const app = express()
const port = process.env.PORT || 5000
configApp(app)

const teacherRoute = require('./Routes/apiTeacher')
const requestRoute = require('./Routes/apiRequest')
const newsApiRoute = require('./Routes/NewsApiRoute')
const apiLesson = require('./Routes/apiLesson')
const authRouter = require('./Routes/apiAuthRoute')
const profileRouter = require('./Routes/profileRoute')

app.use('/api', newsApiRoute)
app.use('/api/lessons', apiLesson)
app.use('/api/teachers', teacherRoute)
app.use('/api/requests', requestRoute)
app.use('/api/auth', authRouter)
app.use('/users/user/profile', profileRouter)

app.listen(port, () => {
  console.log(`Я поехал на порту: ${port}`)
})
