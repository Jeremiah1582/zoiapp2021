const router = require('express').Router()
const doctorController = require('../Controllers/userController')

router.post('/login', doctorController.login)
router.post('/signup', doctorController.signup)

module.exports= router