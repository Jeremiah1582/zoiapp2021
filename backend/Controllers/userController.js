const Patient = require("../Models/Patient/p_Model");
const Doctor = require("../Models/Doctor/dr_Model");

//***** Login function for Patient & Doctor *******//

exports.loginUser = (req, res) => {
  // console.log(req.body, "userController: 07");
  //assign cookie to the
  // console.log(req.body.email, "userController: 09");
  if (req.body.condition === "doctor") {
    Doctor.findOne(
      { email: req.body.email },
      (err, data) => {
        if (data !== null) {
          console.log(data, "userController: 15");
          console.log("Test 01: Doctor Dashboard. userController :16");
          res.status(200).json({ msg: "Doctor Page connected. uController :17" });
        }
         else {
          console.log("Please log in!");
          res.status(404).json({ msg: "Please log in!" });
        }
      }
    );

    // res.send("I m doctor");
  } else if (req.body.condition === "patient") {
    console.log(req.body, "uController :28");
    Patient.findOne(
      { email: req.body.email },
      (err, data) => {
        if (data ) {
          console.log(data, "uController: 33");
          console.log("Test 02: Patient Dashboard connected. 34");
          res.status(200).json({ msg: "Patient Page here 35" });
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
