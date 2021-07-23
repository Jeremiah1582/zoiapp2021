// import

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 5000 || process.env.PORT;
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
// Routes files from Patient and Doctor

const indexRouter = require("./Routers/indexRouter");
const userRouter = require("./Routers/userRouter");
const doctorRouter = require("./Routers/Doctor/doctorRouter");
const patientRouter = require("./Routers/Patient/patientRouter");

// Settings
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// express-session
app.use(
  session({
    secret: process.env.MY_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Database Settings
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;
mongoose
  .connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true,  useFindAndModify: false })
  .then(() => {
    console.log("Mongoose found his way to the database...");
  })
  .catch((err) => {
    console.log(err, "Mongoose lost his connection!");
  });

// Multer part not finish yet !!!
// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "public/upload/files");
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({ storage });

// Routes
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/doctor", doctorRouter);
app.use("/patient", patientRouter);
// Listening PORT
app.listen(PORT, () => {
  console.log("you are logged into port: " + PORT);
});
