import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import ReactDOM from "react-dom";
import Home from "./components/Home";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import RegsDoctorForm from "./components/DoctorRegForm";
import RegsPatientForm from "./components/PatientRegForm";
import Signup from "./components/Signup";
import DoctorDashboard from "./components/Dashboard/DoctorDashboard";
import PatientDashboard from "./components/Dashboard/PatientDashboard";

// import Footer from "./components/Footer";
import Team from "./components/Team";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
  Redirect,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="">
        {/* *******for dynamic contain******** */}
        {/* Log out Button */}
        {/* <button type="button" onClick={logout}>
          Log Out
        </button> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutzoe">
            <About />
          </Route>
          <Route path="/zoeteam">
            <Team />
          </Route>
          <Route path="/user/login">
            <LoginForm />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/doctor/registration">
            <RegsDoctorForm />
          </Route>

          <Route path="/patient/registration">
            <RegsPatientForm />
          </Route>

          <Route path="/patient/dashboard">
            <PatientDashboard />
          </Route>
          <Route path="/doctor/dashboard">
            <DoctorDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
