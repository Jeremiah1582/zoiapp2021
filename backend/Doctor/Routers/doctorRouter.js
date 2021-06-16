const router = require('express').Router()
const userController = require('../Controllers/userController')

router.post('/login', doctorController.login)
router.post('/signup', doctorController.signup)

module.exports= router