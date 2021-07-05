const Patient = require("../Models/Patient/p_Model");
const Doctor = require("../Models/Doctor/dr_Model");

//***** Login function for Patient & Doctor *******//

exports.loginUser = (req, res) => {
  // console.log(req.body, "is here 25");
  //assign cookie to the
  // console.log(req.body.email, "line 27");
  if (req.body.condition === "doctor") {
    Doctor.findOne(
      { email: req.body.email },
      (err, data) => {
        if (data !== null) {
          console.log(data, "line 31");
          console.log("Test 01: Doctor Dashboard. 32");
          res.status(200).json({ msg: "Doctor Page here 33" });
        }
         else {
          console.log("Please log in!");
          res.status(404).json({ msg: "Please log in!" });
        }
      }
    );

    // res.send("I m doctor");
  } else if (req.body.condition === "patient") {
    console.log(req.body, "line 28");
    Patient.findOne(
      { email: req.body.email },
      (err, data) => {
        if (data ) {
          console.log(data, "line 42");
          console.log("Test 02: Patient Dashboard connected. 32");
          res.status(200).json({ msg: "Patient Page here 44" });
        } else {
          console.log("Please log in!");
        }
      }
    );
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
