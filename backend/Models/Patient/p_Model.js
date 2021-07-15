const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newPatient = new Schema({
  accountType: {
    type: String,
    default: "Patient",
  },

  firstName: {
    type: String,
    // required: [true, "Please enter your first name!"],
  },
  lastName: {
    type: String,
    // required: [true, "Please enter your last name!"],
  },
  birthDate: {
    type: String,
    // required: [true, "Please enter your birth date!"],
  },
  gender:{
    type: String,
  },
  email: {
    type: String,
    // required: [true, "E-mail is required!"],
    // unique: true,
  },
  mobileNumber: {
    type: Number,
    // required: [true, "Mobile number is required!"],
  },
  password: {
    type: String,
    // required: [true, "Password is required!"],
  },
    insuranceCompany: {
      type: String,
      // required: [true, "Company name is required!"],
    },
    insuranceNumber: {
      type: String,
      // required: [true, "Insurance number is required!"],
    },
    street: {
      type: String,
    },
    houseNr: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  bookedAppointments:[]

});

const Patient = mongoose.model("Patient", newPatient);
module.exports = Patient;
