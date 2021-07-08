import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import RegsDoctorForm from "./components/DoctorRegForm";
import RegsPatientForm from "./components/PatientRegForm";
import Signup from "./components/Signup";
import DashboardPage from "./components/Dashboard/DashboardPage";
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
  // // save token in localStorage for login
  // const [token, setToken] = useState("false");
  // useEffect(() => {
  //   const user = localStorage.getItem("currentToken");
  //   if (user) {
  //     setToken(true);
  //   }
  // }, []);

  // // logout and remove token
  // const logout = () => {
  //   localStorage.removeItem("currentToken");
  //   window.location.href = "/user/login";
  // };

  return (
    <Router>
      <div className="container">
        {/* *******for dynamic contain******** */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutzoe">
            <About/>
          </Route>
          <Route exact path="/zoeteam">
            <Team />
          </Route>
          <Route path="/user/login">
            <LoginForm />
          </Route>

          <Route path="/signup" >
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
            <DashboardPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
