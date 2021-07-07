const router = require("express").Router();
const patientController = require("../../Controllers/Patient/p_Controller");

// *** Register a new Patient *** //
router.post("/registration", patientController.registerPatient);

// ***Search for a Doctor *** //
router.post("/finddoctor", patientController.findDoctor);

// *** Appointment Part *** //
// router.get("/", patientController.bookAppointment);

module.exports = router;
