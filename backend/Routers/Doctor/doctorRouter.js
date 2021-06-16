const router = require('express').Router()
const doctorController = require('../../Controllers/Doctor/dr_Controller')

router.get('/', doctorController.appointments)

module.exports= router;