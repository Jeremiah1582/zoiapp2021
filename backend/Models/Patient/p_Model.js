const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newPatient = new Schema({
  accountType: {
    type: "Patient",
  },
  user: {
    firstName: {
      type: String,
      required: [true, "Please enter your first name!"],
      default: "First name",
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name!"],
      default: "Last name",
    },
    birthDate: {
      type: String,
      required: [true, "Please enter your birth date!"],
    },
    email: {
      type: String,
      required: [true, "E-mail is required!"],
      unique: true,
    },
    mobileNumber:{
      type:String,
      required:[true, "Mobile number is required!"]
    }
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
  },
  insurance: {
    companyName: {
      type: String,
      required: [true, "Company name is required!"],
    },
    insuranceNumber: {
      type: String,
      required: [true, "Insurance number is required!"],
    },
  },
  address: {
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
  },
});

const PatientModel = mongoose.model("PatientModel", newPatient);
module.exports = PatientModel;
