import React, {useContext, useEffect} from "react";
// import DashNav from './DashNav';
// import '../../styling/customDashboard.css'
//dashNav Widgets:
import Home from "./PatientWidgets/Home";
import Logout from "../Logout";
// import Calendar from "./PatientWidgets/Calendar";
// import Messages from "./PatientWidgets/Messages";
import AppointmentList from "./PatientWidgets/AppointmentList";
import FindDoctor from "./PatientWidgets/FindDoctor";
// import TodoList from "./PatientWidgets/TodoList";
import Weather from "./DashWidgets/Weather";
import Settings from "./DashWidgets/Settings";
import { BrowserRouter as DashRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import {MyContext} from '../../Context_APIs/userContextAPI'

function PatientDashboard() {
  
  const {userState, getUser} = useContext(MyContext)

useEffect(() => {
 getUser()
},[])
console.log(userState, 'the patientState ')
  return (
    <DashRouter>
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
    </DashRouter>
  );
}

export default PatientDashboard;
