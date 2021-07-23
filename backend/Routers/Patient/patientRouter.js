const router = require("express").Router();
const patientController = require("../../Controllers/Patient/p_Controller");

// *** Register a new Patient *** //
router.post("/registration", patientController.registerPatient);

// ***Search for a Doctor *** //
router.post("/finddoctor", patientController.findDoctor);


// *** Add Patient info in Booking Form *** //
router.post("/bookingForm", patientController.bookingForm)
// *** Appointment Part *** //
// router.get("/", patientController.bookAppointment);
// Booked Appointments Part
router.post("/bookedappointments",patientController.bookedAppointments)

module.exports = router;
