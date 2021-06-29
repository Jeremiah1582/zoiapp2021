const router = require('express').Router()
const patientController = require('../../Controllers/Patient/p_Controller')

router.get('/', patientController.bookAppointment )



module.exports= router