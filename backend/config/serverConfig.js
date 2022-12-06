const morgan = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
const getUser = require('../middlewares/getUser')

const sessionConfig = require('./sessionConfig')

function configApp(app) {
  app.use(express.urlencoded({ extended: true }))
  app.use(getUser)
  app.use(cors({ origin: ['http://localhost:3000'], credentials: true }))
  app.use(express.json())
  app.use(cookieParser())
  app.use(session(sessionConfig))
  app.use(morgan('dev'))
  app.use(express.static('public'))
}

module.exports = configApp
