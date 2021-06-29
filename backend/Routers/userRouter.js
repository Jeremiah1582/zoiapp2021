const router = require('express').Router()
const patientController =require('../Controllers/patientController')

router.get('/login',  patientController.login)
router.get('/signup', patientController.signup)
router.get('/logout', patientController.logout)

module.exports= router