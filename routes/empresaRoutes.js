const express = require('express')
const router = express.Router()
const EmpresaController = require('../controllers/EmpresaController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth

//rotas get post

module.exports = router