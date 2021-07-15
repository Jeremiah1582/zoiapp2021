const Patient = require("../Models/Patient/p_Model");
const Doctor = require("../Models/Doctor/dr_Model");
const jwt = require("jsonwebtoken");
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
  const token = req.body.userToken;
  
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) throw err;
    let doctorId = req.body.newAppointment.doctorId
    let patientId = req.body.newAppointment.patientId;
    
console.log(doctorId,"line74");
    // console.log(Id, "line 120");
    Doctor.findByIdAndUpdate(
      doctorId,
      { $push: { bookedAppointment: req.body.newAppointment } },
      (err, doc) => {
        // console.log(req.body.timeSlot, "line 126");
        if (err) throw err;
        console.log(doc, "line 127");
        res.json({ msg: "Dr appointment successfully added" });
      })
    Patient.findByIdAndUpdate(
      patientId,
      { $push: { bookedAppointment: req.body.newAppointment } },
      (err, doc) => {
        // console.log(req.body.timeSlot, "line 126");
        if (err) throw err;
        console.log(doc, "line 127");
        res.json({ msg: "patients appointment successfully added" });
      }
    );
  });
};
