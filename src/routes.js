const { Router } = require('express')
const Controller = require('./controllers/Controller')

const app = Router()

app.get('/', Controller.index)

module.exports = app