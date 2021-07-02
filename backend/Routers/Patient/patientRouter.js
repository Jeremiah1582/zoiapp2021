const router = require("express").Router();
const patientController = require("../../Controllers/Patient/p_Controller");



// *** Register a new Patient *** // 
router.post("/registration", patientController.registerPatient);


// *** Appointment Part *** // 
// router.get("/", patientController.bookAppointment);

module.exports = router;
