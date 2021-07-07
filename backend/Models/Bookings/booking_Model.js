const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newBooking = new Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  bookingDate: {
    type: Date,
  },
  bookingTime: {
    type: Date,
  },
  description: {
    type: String,
  },
});
const Bookings = mongoose.model("Booking", newBooking);
module.exports = Bookings;
