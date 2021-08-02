const Doctor = require("../../Models/Doctor/dr_Model");
const Patient = require("../../Models/Patient/p_Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

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
              // console.log(doc, "document 73");
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
  // console.log(req.body, "line 114 DrController");
  const token = req.body.userToken;
  let Id = "";
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) throw err;
    Id = data.id;
    // console.log(Id, "line 120");
    Doctor.findByIdAndUpdate(
      Id,
      { $push: { availableTimeSlots: req.body.timeSlot } },
      (err, doc) => {
        console.log(doc.availableTimeSlots, "line 128");
        if (err) throw err;
        // console.log(doc, "line 127");
        res.json({
          msg: "time slot successfully added",
          timeSlots: doc.availableTimeSlots,
        });
      }
    );
  });
};

// ** Search for a Doctor ** //
exports.findDoctor = (req, res) => {
  // console.log(req.body.field, "line 136 dr_controller");
  Doctor.find({ $text: { $search: req.body.field } }, (err, doc) => {
    // console.log(doc,'line 138 dr_controller')
    res.json(doc);
  });
};

//
exports.bookingForm = (req, res) => {
  const token = req.body.userToken;
  // console.log(req.body, "line 147 DrController ");

  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) throw err;
    let Id = data.id;
    // console.log(Id, "line 122 p.controller");
    Doctor.findById(Id, (err, data) => {
      console.log(data, "line 125 p.controller");
      res.status(200).json({ msg: "Patient info is coming", data });
    });
  });
};

//List of appointments Booked for Dr and Patient **********************
exports.bookedAppointments = (req, res) => {
  //add timeslot to the doctors DB
  // console.log(req.body, "line 114");

  let doctorId = req.body.doctorId;
  let patientId = req.body.patientId;
  let timeSlotId = req.body.timeSlotId;
  let patEmail = req.body.email;
  let patFirstName = req.body.firstName;

  // console.log(doctorId,"Dr Id");
  // console.log(patientId,"patient Id");
  // console.log(timeSlotId,"timeSlot Id");
  // console.log(Id, "line 120");
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $push: { bookedAppointments: req.body }, //update
      $pull: { availableTimeSlots: { _id: timeSlotId } },
    }, //remove
    (err, doc) => {
      // doc = all Dr details
      if (err) throw err;
      //  console.log(doc, 'line 187 ');
      // sendGrid Email confirmation of appointment.
      sgMail.setApiKey(process.env.SG_SECRET_KEY);
      const sgEmail = {
        to: patEmail,
        from: process.env.ADMIN_EMAIL,
        subject: "sending a Test email ",
        html: `<p>
            Hi  ${patFirstName}.
            <br/>

            Thank you for using the Zoe App to book your Dr appointment.<br/> Your appointment has been successfully booked. <br/>

            Please remember to bring to your appointment: <br/>
            - your ID
            - your insurance card
<br/>
            You can view your appointment details in the App by logging in and clicking into the appointment list feature. <br/>

            Stay healthy and well, and we hope to see you again soon!<br/>
            The Zoe Team. 
            </p>`,
      };
      sgMail
        .send(sgEmail)
        .then(() => {
          console.log("check email for confirmation");
          res.json({ msg: " appointment successfully added", doc });
        })
        .catch((err) => {
          console.log("did not send email");
          // console.log(err);
        });

      // Patient.findByIdAndUpdate(
      //       patientId,
      //       { $push: { bookedAppointments: req.body } },
      //       (err, padoc) => { //doc= all Patient details
      //         if (err) throw err;
      //          console.log(padoc, 'line 197 ');
      //         const sgEmail = {
      //           to: padoc.email,
      //           from: process.env.ADMIN_EMAIL,
      //           subject: 'sending a Test email ',
      //           html: `<p>
      //             Hi  ${padoc.firstName}.

      //             Thank you for using the Zoe App to book your Dr appointment. Your appointment has been successfully booked.

      //             Please remember to bring to your appointment:
      //             - your ID
      //             - your insurance card

      //             You can view your appointment details in the App by logging in and clicking into the appointment list feature.

      //             Stay healthy and well, and we hope to see you again soon!
      //             The Zoe Team.
      //             </p>`
      //         }
      //         sgMail
      //           .send(sgEmail)
      //           .then(()=>{console.log('check email for confirmation')})
      //         .catch(err=>{console.log('did not send email');
      //         console.log(err);}

      //         )

      //         res.json({msg: "patients appointment successfully added"}, doc);
      //       }
      //     )

      // res.json({ msg: "Dr appointment successfully added", doc });
    }
  );

  // Patient.findByIdAndUpdate(
  //   patientId,
  //   { $push: { bookedAppointments: req.body } },
  //   (err, doc) => { //doc= all Patient details
  //     if (err) throw err;
  //     // console.log(doc, 'line 192 ');

  //     res.json({msg: "patients appointment successfully added"}, doc);
  //   }
  // )

  // Doctor.findById().availableTimeSlots.findByIdAndDelete()
  //  doctorId.findBy({availableTimeSlots},
  //   findByIdAndDelete(timeSlotId)
  //   {$splice: {availableTimeSlots: timeSlotId},1}
  //   ))
};
