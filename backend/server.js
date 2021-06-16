// import
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Settings
app.use(cors());
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
  .connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose found his way to the database...");
  })
  .catch((err) => {
    console.log(err, "Mongoose lost his connection!");
  });

// Routes
app.use("/");
app.use("/user");
app.use("/patient");
app.use("/doctor");
app.use("/indexDr");

// Listening PORT
app.listen(PORT, () => {
  console.log("you are logged into port: " + PORT);
});
