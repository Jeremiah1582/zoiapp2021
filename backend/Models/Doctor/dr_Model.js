const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newDoctor = new Schema({
  accountType: {
    type: String,
    default: "Doctor",
  },

  firstName: {
    type: String,
    // required: [true, "First name is required!"],
  },
  lastName: {
    type: String,
    // required: [true, "Last name is required!"],
  },
  email: {
    type: String,
    // required: [true, "E-mail is required!"],
    // unique: true,
  },
  mobileNumber: {
    type: Number,
    // required:[true, "Mobile number is required!"]
  },
  password: {
    type: String,
    // required: [true, "Password is required!"],
  },

  licenceNumber: {
    type: String,
    // required: [true, "License number is required!"],
  },
  yearOfCertificate: {
    type: String,
  },
  specialistFields: [
    {
      type: String,
    },
  ],
  doctorFile: {
    type: String,
    // required: [true, "upload required!"],
  },
  languages: {
    type: String,
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
});

const Doctor = mongoose.model("Doctor", newDoctor);
module.exports = Doctor;
