// import
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Routes files from Patient and Doctor

const indexRouter = require('./MainRoutes/indexRouter')
const userRouter = require('./MainRoutes/userRouter')
const patientRouter = require('./Patient/Routers/patientRouter')
const doctorRouter = require('./Doctor/Routers/doctorRouter')

// Settings
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// express-session
// app.use(
//   session({
//     secret: process.env.MY_SECRET,
//     cookie: {
//       maxAge: 1000 * 60 * 60,
//     },
//   })
// );

// Database Settings
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;
mongoose
  .connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose found his way to the database...");
  })
  .catch((err) => {
    console.log(err, "Mongoose lost his connection!");
  });

// Routes
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/patient", patientRouter);
app.use("/doctor", doctorRouter);


// Listening PORT
app.listen(PORT, () => {
  console.log("you are logged into port: " + PORT);
});
