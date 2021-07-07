const Patient = require("../../Models/Patient/p_Model");
const Doctor = require("../../Models/Doctor/dr_Model");
const bcrypt = require("bcrypt");
exports.registerPatient = (req, res) => {
  // console.log(req.body, "patient data line 04");
  const {
    firstName,
    lastName,
    birthDate,
    email,
    mobileNumber,
    password,
    confirmedPassword,
    insuranceCompany,
    insuranceNumber,
    street,
    houseNr,
    postalCode,
    city,
    country,
  } = req.body;
  const error = {};
  if (firstName == "") {
    error.firstName = "First name is required!";
  }
  if (lastName == "") {
    error.lastName = "Last name is required!";
  }
  if (birthDate == "") {
    error.birthDate = "birth date is required!";
  }
  if (email == "") {
    error.email = "email is required!";
  }
  if (mobileNumber == "") {
    error.mobileNumber = "Mobile number is required!";
  }
  if (password == "") {
    error.password = "password is required!";
  }
  if (confirmedPassword == "") {
    error.confirmedPassword = "confirmation is required!";
  }
  if (insuranceCompany == "") {
    error.insuranceCompany = "insurance company is required!";
  }
  if (insuranceNumber == "") {
    error.insuranceNumber = "Insurance number is required!";
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
    birthDate == "" ||
    mobileNumber == "" ||
    email == "" ||
    password == "" ||
    confirmedPassword == "" ||
    insuranceCompany == "" ||
    insuranceNumber == "" ||
    street == "" ||
    houseNr == "" ||
    postalCode == "" ||
    city == "" ||
    country == ""
  ) {
    return res.json({ msg: error });
  }
  Patient.findOne({ email: req.body.email }, (err, data) => {
    if (data !== null) {
      return res.json({ msg: "Email already registered" });
    } else {
      const userPassword = req.body.password;
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(userPassword, salt, (err, hashPassword) => {
          req.body.password = hashPassword;
          const newPatient = new Patient(req.body);
          newPatient.save((err, doc) => {
            if (err) {
              throw err;
            } else {
              res.json({ msg: `${doc.firstName} successfully added.` });
            }
          });
        });
      });
    }
  });
};

// ** Search for a Doctor ** //
exports.findDoctor = (req, res) => {
  console.log(req.body.field, "line 108");
  Doctor.find({ $text: { $search: req.body.field } }, (err, doc) => {
    // console.log(doc)
    res.json(doc);
  });
};

// exports.bookAppointment = (req, res) => {
//   res.send(
//     "<h1> Patient: </br> this is where patients will book appointments</h1> "
//   );
// };
