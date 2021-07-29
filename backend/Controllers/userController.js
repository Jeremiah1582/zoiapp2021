const Patient = require("../Models/Patient/p_Model");
const Doctor = require("../Models/Doctor/dr_Model");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const bcrypt = require("bcrypt");

//***** Login function for Patient & Doctor *******//

// exports.loginUser = (req, res) => {
//   if (req.body.condition === "doctor") {
//     Doctor.findOne({ email: req.body.email }, (err, data) => {
//       if (data !== null) {
//         bcrypt.compare(req.body.password, data.password, (err, result) => {
//           if (err) throw err;
//           if (result) {
//             const secret = process.env.JWT_SECRET;
//             const token = jwt.sign({ id: data._id }, secret, {
//               expiresIn: "1d", // 60*60*24
//               algorithm: "HS256",
//             });
//             res.status(200).json({ msg: "Welcome to Doctor Page ", token });
//           } else {
//             res.json({ msg: "password incorrect" });
//           }
//         });
//       } else {
//         // console.log("Please log in!");
//         res.status(404).json({ msg: "Please log in!" });
//       }
//     });
//     if (req.body.condition === "patient") {
//       console.log(req.body, "uController :34");
//       Patient.findOne({ email: req.body.email }, (err, data) => {
// if (data !== null) {

//   bcrypt.compare(req.body.password, data.password,(err,result)=>{
//     if(err) throw err
//     if(result){
//       const secret = process.env.JWT_SECRET;
//       const token = jwt.sign({ id: data._id }, secret, {
//         expiresIn: "1d", // 60*60*24
//         algorithm: "HS256",
//       });
//     res
//     .status(200)
//     .json({ msg: "Welcome to Patient Page ", token });
//     } else {
//       res.json({msg:'Log in failed'})
//     }
//   })
// }
//         if (data) {
//           const secret = process.env.JWT_SECRET;
//           const token = jwt.sign({ id: data._id }, secret, {
//             expiresIn: "1d", // 60*60*24
//             algorithm: "HS256",
//           });

//           res.status(200).json({ msg: "Welcome to Patient Page ", token });
//         } else {
//           // console.log("Please log in!");
//           res.status(404).json({ msg: "Please log in!" });
//         }
//       });
//     }
//   }
// };

// code from jeremiah
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
    console.log(req.body, "uController :34");
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
