const router = require("express").Router();
const doctorController = require("../../Controllers/Doctor/dr_Controller");
const multer = require("multer");

// Multer part not finish yet !!!
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public/upload/files");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });

// router.get("/", doctorController.appointments);
// Register a new doctor
router.post(
  "/registration",
  upload.single("doctorFile"),
  doctorController.registerDoctor
);

module.exports = router;
