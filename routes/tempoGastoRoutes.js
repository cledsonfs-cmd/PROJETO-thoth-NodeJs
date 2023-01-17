const express = require('express')
const router = express.Router()
const TempoGastoController = require('../controllers/TempoGastoController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth

//rotas get post

module.exports = router