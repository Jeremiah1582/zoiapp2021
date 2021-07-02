// const PatientModel = require('../Models/Patient/p_Model')
// const DoctorModel = require('../Models/Doctor/dr_Model')

// ****************** signup function************
// exports.registrationForm = (req, res) => {
//   //Create user in database
//   console.log("this is the signup function");
//   res.send("<h1> <br/>  sign up page </h1>");
// };
// exports.registerUser = (req, res) => {
//   //Create user in database
//   console.log("this is the signup function");
//   res.send("<h1> <br/>  sign up page </h1>");
// };

// //********** login function***********
// exports.loginForm = (req, res) => {
//   //assign cookie to the

//   console.log("this is the login function");
//   res.send("<h1> <br/> login page </h1>");
// };

exports.loginUser = (req, res) => {
  console.log(req.body,"is here");
  //assign cookie to the
  if (req.body.condition === "doctor") {
    console.log("doctor Page");
    res.status(200).json({msg:"Doctor Page here"})
    // res.send("I m doctor");
  } else if(req.body.condition === "patient") {
    console.log("patient page");
    res.status(200).json({msg:"Patient Page here"})
    // res.send("I m patient")
  } else{
      console.log("Please log in!");
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
