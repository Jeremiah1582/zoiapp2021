const router = require("express").Router();
const userController = require("../Controllers/userController");

// *** Registration Part *** //

// Display Registration Page
// router.get("/signup", userController.registrationForm);

// Register a new user
// router.post("/signup", userController.registerUser);

// *** Login Part *** //

// Display Login Page
// router.get("/login", userController.loginForm);

// Login as user
router.post("/login", userController.loginUser);


// Booked Appointments Part
router.post("/appointmentlist",userController.bookedAppointments)
// *** Log Out *** //
// router.get("/logout", userController.logout);

module.exports = router;
