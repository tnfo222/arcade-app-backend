const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const usersController = require('./controllers/users_controller')
const cookieSession = require('cookie-session')
const defineCurrentUser = require('./middleware/defineCurrentUser')

//Configuration / Middleware
require('dotenv').config()

// Express Settings
app.use(cookieSession({
    name: 'session',
    keys: [ process.env.SESSION_SECRET ],
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentUser)

// Controllers & Routes

app.use(express.urlencoded({ extended: true }))
app.use('/user', usersController)

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
