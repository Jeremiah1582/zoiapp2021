const Patient = require("../Models/Patient/p_Model");
const Doctor = require("../Models/Doctor/dr_Model");
const jwt = require("jsonwebtoken");
const sgMail = require('@sendgrid/mail')
require('dotenv').config()

//***** Login function for Patient & Doctor *******//

exports.loginUser = (req, res) => {
  // console.log(req.body, "userController: 07");
  //assign cookie to the
  // console.log(req.body.email, "userController: 09");
  if (req.body.condition === "doctor") {
    Doctor.findOne({ email: req.body.email }, (err, data) => {
      if (data !== null) {
        // console.log(data, "userController: 15");
        // console.log("Test 01: Doctor Dashboard. userController :16");
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign({ id: data._id }, secret, {
          expiresIn: "1d", // 60*60*24
          algorithm: "HS256",
        });
        res
          .status(200)
          .json({ msg: "Doctor Page connected. uController :17", token });
      } else {
        console.log("Please log in!");
        res.status(404).json({ msg: "Please log in!" });
      }
    });

    // res.send("I m doctor");
  } else if (req.body.condition === "patient") {
    console.log(req.body, "uController :28");
    Patient.findOne({ email: req.body.email }, (err, data) => {
      if (data) {
        // console.log(data, "uController: 33");
        // console.log("Test 02: Patient Dashboard connected. 34");
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign({ id: data._id }, secret, {
          expiresIn: "1d", // 60*60*24
          algorithm: "HS256",
        });

        res.status(200).json({ msg: "Patient Page here 35", token });
      } else {
        console.log("Please log in!");
      }
    });
    // res.send("I m patient")
    // } else {
    //   console.log("Please log in!");
  }
};

// //****************** logout function***************/
// exports.logout = (req, res) => {
//   //delete the cookies here
//   delete req.session.user;
//   res.status(200).json({ msg: "Please login!" });
//   console.log("this is the logout function");
//   res.send("<h1> <br/> you have licked log out </h1>");
// };

//need to create an axios method in the front end to send the data to the back end
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
