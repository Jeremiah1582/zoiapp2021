const router = require("express").Router();
const patientController = require("../../Controllers/Patient/p_Controller");

// router.get("/", patientController.bookAppointment);

// ** Registration Part ** //

// display registration form page
// router.get("/registration", patientController.registrationForm);

// register a new patient
router.post("/registration", patientController.registerPatient);

module.exports = router;
