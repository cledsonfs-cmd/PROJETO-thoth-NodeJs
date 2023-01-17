const express = require('express')
const router = express.Router()
const ProjetoController = require('../controllers/ProjetoController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth

//rotas get post

router.get('/all',ProjetoController.all)

module.exports = router