const express = require('express')
const router = express.Router()
const ThothController = require('../controllers/ThothController')


//helpers
const checkAuth = require('../helpers/auth').checkAuth

router.get('/dashboard', checkAuth, ThothController.dashboard)
router.get('/editusr/:id',checkAuth,ThothController.editUser)
router.post('/saveusr',ThothController.editUserSave)
router.post('/delusr',ThothController.delUser)
router.post('/updatepw',ThothController.updatePw)
router.get('/users',ThothController.users)
router.get('/',ThothController.showThoth)


module.exports = router