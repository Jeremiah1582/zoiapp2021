const Patient = require("../../Models/Patient/p_Model");
const Doctor = require("../../Models/Doctor/dr_Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()

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
  console.log(req.body.field, "line 111");
  Doctor.find({ $text: { $search: req.body.field } }, (err, doc) => {
    // console.log(doc)
    res.json(doc);
  });
};

exports.bookingForm = (req, res) => {
  const token = req.body.userToken;
  console.log(req.body, "line 118 pController ");
  
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) throw err;
    let Id = data.id;
    console.log(Id, "line 122 p.controller");
    Patient.findById(Id, (err, data) => {

      console.log(data, "line 125 p.controller");
      res.status(200).json({ msg: "Patient info is coming", data });
    });
  });
};
// exports.bookAppointment = (req, res) => {
//   res.send(
//     "<h1> Patient: </br> this is where patients will book appointments</h1> "
//   );
// };



// const msg= .js{
//   to: 

// }

exports.bookedAppointments = (req, res) => {
  //add timeslot to the doctors DB
  console.log(req.body, "line 114");
  
  
    let doctorId = req.body.doctorId
    let patientId = req.body.patientId;
    let timeSlotId = req.body.timeSlotId
    
console.log(doctorId,"Dr Id");
console.log(patientId,"patient Id");
console.log(timeSlotId,"timeSlot Id");
    // console.log(Id, "line 120");
    Doctor.findByIdAndUpdate(
      doctorId,
      { 
      $push: { bookedAppointments: req.body}, //update
      $pull:{ availableTimeSlots: {_id:timeSlotId} }},//remove 
      (err, doc) => { // doc = all Dr details
        if (err) throw err;
        res.json({ msg: "Dr appointment successfully added", doc });
      }
      )
    Patient.findByIdAndUpdate(
      patientId,
      { $push: { bookedAppointments: req.body } },
      (err, doc) => { //doc= all Patient details
        if (err) throw err;
        console.log(doc);
        
// sendGrid Email confirmation of appointment.
        sgMail.setApiKey(process.env.SG_SECRET_KEY)

        const sgEmail = {
          to: doc.email,
          from: process.env.ADMIN_EMAIL, 
          html: `<p>
            Hi  ${doc.firstName}.

            Thank you for using the Zoe App to book your Dr appointment. Your appointment has been successfully booked. 

            Please remember to bring to your appointment:
            - your ID
            - your insurance card

            You can view your appointment details in the App by logging in and clicking into the appointment list feature. 

            Stay healthy and well, and we hope to see you again soon!
            The Zoe Team. 
            </p>`
        }
        sgMail
          .send(sgEmail)
          .then(()=>{console.log('check email for confirmation')})
        .catch(err=>{console.log('did not send email');}

        )
        res.json({msg: "patients appointment successfully added"}, doc);
      }
    )
    // Doctor.findById().availableTimeSlots.findByIdAndDelete() 
    //  doctorId.findBy({availableTimeSlots},
    //   findByIdAndDelete(timeSlotId)
    //   {$splice: {availableTimeSlots: timeSlotId},1}
    //   ))

};