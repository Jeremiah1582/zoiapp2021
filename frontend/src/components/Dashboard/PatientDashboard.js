import React, { useContext, useEffect } from "react";
// import DashNav from './DashNav';
// import '../../styling/customDashboard.css'
//dashNav Widgets:
import Home from "./PatientWidgets/Home";
import Logout from "../Logout";
// import NavBar from "../Navbar";
// import Calendar from "./PatientWidgets/Calendar";
// import Messages from "./PatientWidgets/Messages";
import AppointmentList from "./PatientWidgets/AppointmentList";
import FindDoctor from "./PatientWidgets/FindDoctor";
// import TodoList from "./PatientWidgets/TodoList";
import Weather from "./DashWidgets/Weather";
import Settings from "./DashWidgets/Settings";
import { BrowserRouter as DashRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import { MyContext } from "../../Context_APIs/userContextAPI";

function PatientDashboard() {
  const { userState, getUser } = useContext(MyContext);

  useEffect(() => {
    getUser();
  }, []);
  // console.log(userState, 'the patientState ')
  return (
    <DashRouter>
      {/* <NavBar/> */}
      <Logout />

      <div className="dash-container">
        <div className="dash-nav-container">
          <ul className="dash-nav-items">
            <Link
              className="dash-menu-item dash-menu-link"
              to="/patient/dashboard/home"
            >
              <i className="fas fa-home" />
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/patient/dashboard/finddoctor"
            >
              <i className="fas fa-user-md"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/patient/dashboard/appointmentlist"
            >
              <i class="fas fa-calendar-check"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/patient/dashboard/messages"
            >
              <i class="fas fa-sms"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/patient/dashboard/weather"
            >
              <i class="fas fa-cloud-sun-rain"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/patient/dashboard/todolist"
            >
              <i className="fas fa-th-list"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/patient/dashboard/settings"
            >
              <i className="fas fa-cog"></i>
            </Link>
          </ul>
        </div>

        {/* <main className="widget-display">
          display
          </main> */}
        <div className="widget-container">
          <Switch>
            <Route exact path="/patient/dashboard/home">
              <Home />
            </Route>

            <Route path="/patient/dashboard/finddoctor">
              <FindDoctor />
            </Route>
            <Route path="/patient/dashboard/appointmentlist">
              <AppointmentList />
            </Route>
            <Route path="/patient/dashboard/weather">
              <Weather />
            </Route>
            <Route path="/patient/dashboard/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </DashRouter>
  );
}

export default PatientDashboard;
