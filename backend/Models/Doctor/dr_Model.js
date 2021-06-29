const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newDoctor = new Schema({
  accountType: {
    type: "Doctor",
  },
  user: {
    firstName: {
      type: String,
      required: [true, "First name is required!"],
      default: "First name",
    },
    lastName: {
      type: String,
      required: [true, "Last name is required!"],
      default: "Last name",
    },
    email: {
      type: String,
      required: [true, "E-mail is required!"],
      unique: true,
    },
    mobileNumber:{
      type:String,
      required:[true, "Mobile number is required!"]
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
  },
  licenseNumber: {
    type: String,
    required: [true, "License number is required!"],
  },
  yearOfCertificate: {
    type: String,
  },
  specialistIn: {
    type: String,
  },
  qualifications: {
      type: String,
      required: [true, "upload required!"],
      default: "please include a scanned copy of your qualifications",
    },
  languages: {
    type: String,
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

const DoctorModel = mongoose.model("DoctorModel", newDoctor);
module.exports = DoctorModel;
