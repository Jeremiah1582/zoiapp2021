const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUser = new Schema({
  insuranceCompany: {
    name: {
      type: String,
      required: [true, "Company name is required!"],
    },
  },
  insuranceNumber: {
    type: String,
    required: [true, "Insurance number is required!"],
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
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
  },
});

const User = mongoose.model("User", newUser);
module.exports = User;
