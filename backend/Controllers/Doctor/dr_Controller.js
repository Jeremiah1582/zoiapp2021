const Doctor = require("../../Models/Doctor/dr_Model");
const bcrypt = require("bcrypt");

// exports.appointments=(req, res)=>{

// res.send(' <h1>Dr: </br> this is the appointment page for Dr </h1>')
// }
exports.registerDoctor = (req, res) => {
  // console.log(req.body, "line 09 controller");
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    confirmedPassword,
    licenceNumber,
    specialistFields,
    doctorFile,
  } = req.body;
  const error = {};
  if (firstName == "") {
    error.firstName = "First name is required";
  }
  if (lastName == "") {
    error.lastName = "Last name is required";
  }
  if (email == "") {
    error.email = "email is required";
  }
  if (mobileNumber == "") {
    error.mobileNumber = "mobile number is required";
  }
  if (password == "") {
    error.password = "password is required";
  }
  if (confirmedPassword == "") {
    error.confirmedPassword = "password is required";
  }
  if (licenceNumber == "") {
    error.licenceNumber = "licence number is required";
  }
  if (specialistFields == "") {
    error.specialistFields = "specialistFields is required";
  }
  if (doctorFile == "") {
    error.doctorFile = "files is required";
  }
  if (
    firstName == "" ||
    lastName == "" ||
    mobileNumber == "" ||
    email == "" ||
    password == "" ||
    confirmedPassword == "" ||
    licenceNumber == "" ||
    specialistFields == "" ||
    doctorFile == ""
  ) {
    return res.json({ msg: error });
  }
  Doctor.findOne({ email: req.body.email }, (err, data) => {
    if (data !== null) {
      return res.json({ msg: "Email already registered" });
    } else {
      const userPassword = req.body.password;
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(userPassword, salt, (err, hashPassword) => {
          req.body.password = hashPassword;
          const newDoctor = new Doctor(req.body);
          newDoctor.save((err, doc) => {
            if (err) {
              throw err;
            } else {
              // res.json({ msg: `${doc.firstName} successfully added.` });
              console.log(doc, "document 73");
              res.json("Sign up done.");
            }
          });
        });
      });
    }
  });
};
