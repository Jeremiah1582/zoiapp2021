const Doctor = require("../../Models/Doctor/dr_Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    street,
    houseNr,
    postalCode,
    city,
    country,
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
  if (street == "") {
    error.street = "Street is required!";
  }
  if (houseNr == "") {
    error.houseNr = "House Nr is required!";
  }
  if (postalCode == "") {
    error.postalCode = "Postal code Nr is required!";
  }
  if (city == "") {
    error.city = "City is required!";
  }
  if (country == "") {
    error.country = "Country is required!";
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
    doctorFile == "" ||
    street == "" ||
    houseNr == "" ||
    postalCode == "" ||
    city == "" ||
    country == ""
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

exports.setAppointmentTime = (req, res) => {
  //add timeslot to the doctors DB
  console.log(req.body, "line 114");
  const token = req.body.userToken;
  let Id = "";
  jwt.verify(token, process.env.JWT_SECRET, (err, userId) => {
    if (err) throw err;
    Id = userId;
  });

  Doctor.findByIdAndUpdate(
    Id,
    { $push: { availableTimeSlots: req.body.timeSlot } },
    (err, doc) => {
      console.log(doc, "line 126");
      res.json({ msg: "time slot successfully added" });
    }
  );
};
