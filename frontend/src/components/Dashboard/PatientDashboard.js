import React from "react";
// import DashNav from './DashNav';
// import '../../styling/customDashboard.css'
//dashNav Widgets:
import Home from "./PatientWidgets/Home";
import Logout from "../Logout";
// import Calendar from "./PatientWidgets/Calendar";
// import Messages from "./PatientWidgets/Messages";
// import PatientList from "./PatientWidgets/PatientList";
import FindDoctor from "./PatientWidgets/FindDoctor";
// import TodoList from "./PatientWidgets/TodoList";
// import Weather from "./PatientWidgets/Weather";
// import Settings from "./PatientWidgets/Settings";
import { BrowserRouter as DashRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
function PatientDashboard() {
  return (
    <DashRouter>
      <Logout/>
      <h3>Patient Dashboard</h3>
      <div className="page-container">
        <div className="dash-nav-container">
          <ul className="dash-nav-items">
            <Link className="dash-menu-item dash-menu-link" to="/home">
              <i className="fas fa-home" />
            </Link>
            <Link className="dash-menu-item dash-menu-link" to="/finddoctor">
              <i className="fas fa-user-md"></i>
            </Link>
          
          </ul>
        </div>

        {/* <main className="widget-display">
          display
          </main> */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
         
          <Route path="/finddoctor">
            <FindDoctor />
          </Route>
         
        </Switch>
      </div>
    </DashRouter>
  );
}

export default PatientDashboard;
