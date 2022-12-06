require('dotenv').config()

const express = require('express')

const configApp = require('./config/serverConfig')

const app = express()
const port = process.env.PORT || 5000
configApp(app)

const apiRoute = require('./Routes/apiRoute')
const teacherRoute = require('./Routes/api')
const authRouter = require('./Routes/apiAuthRoute')
const profileRouter = require('./Routes/profileRoute')

app.use('/api', apiRoute)
app.use('/api/teachers', teacherRoute)
app.use('/api/auth', authRouter)
app.use('/users/user/profile', profileRouter)

app.listen(port, () => {
  console.log(`Я поехал на порту: ${port}`)
})
