const router = require("express").Router();
const doctorController = require("../../Controllers/Doctor/dr_Controller");
const multer = require("multer");

// *** Multer Part *** //
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public/upload/files");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });


// *** Register a new Doctor *** // 
router.post(
  "/registration",
  upload.single("doctorFile"),
  doctorController.registerDoctor
);
// find doctor route
router.post("/finddoctor", doctorController.findDoctor);


// *** Add users info in Booking Form *** //
router.post("/bookingForm",doctorController.bookingForm)

router.post("/setAppointmentTime", doctorController.setAppointmentTime)
// *** Appointment Part *** // 
// router.get("/", doctorController.appointments);
// Booked Appointments Part
router.post("/bookedappointments", doctorController.bookedAppointments)

module.exports = router;
