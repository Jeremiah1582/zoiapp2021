const router = require('express').Router()
const userController =require('../Controllers/userController')

router.get('/login',  userController.login)
router.get('/signup', userController.signup)
router.get('/logout', userController.logout)

module.exports= router