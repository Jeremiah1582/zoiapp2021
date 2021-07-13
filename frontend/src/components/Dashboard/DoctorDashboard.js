import React from "react";
// import DashNav from './DashNav';
// import "../../styling/customDashboard.scss";
// import "../../styling/customDashboard.css";
//dashNav Widgets:
import Logout from "../Logout";
import Home from "./DashWidgets/Home";
import SetAppointmentTimes from "./DashWidgets/SetAppointmentTimes";
import Messages from "./DashWidgets/Messages";
import PatientList from "./DashWidgets/PatientList";
import DrList from "./DashWidgets/DrList";
import TodoList from "./DashWidgets/TodoList";
import Weather from "./DashWidgets/Weather";
import Settings from "./DashWidgets/Settings";
import { BrowserRouter as DashRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
function DoctorDashboard() {
  return (
    <DashRouter>
      <Logout />
      <h3>Doctor Dashboard</h3>

      <div className="page-container">
        {/* <img className='background-img' href='../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg' */}

        <div className="dash-nav-container">
          <ul className="dash-nav-items">
            <Link className="dash-menu-item dash-menu-link" to="/doctor/home">
              <i className="fas fa-home" />
            </Link>

            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/SetAppointmentTimes"
            >
              <i className="fas fa-calendar-alt"></i>
            </Link>

            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/messages"
            >
              <i className="fas fa-comments"></i>
            </Link>

            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/patientList"
            >
              <i className="fas fa-user-injured"></i>
            </Link>

            <Link className="dash-menu-item dash-menu-link" to="/doctor/drList">
              <i className="fas fa-user-md"></i>
            </Link>

            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/todolist"
            >
              <i className="fas fa-th-list"></i>
            </Link>

            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/settings"
            >
              <i className="fas fa-cog"></i>
            </Link>
          </ul>
        </div>

        {/* <main className="widget-display">
          display
          </main> */}
        <Switch>
          <Route exact path="/doctor/home">
            <Home />
          </Route>
          <Route path="/doctor/SetAppointmentTimes">
            <SetAppointmentTimes />
          </Route>
          <Route path="/doctor/messages">
            <Messages />
          </Route>
          <Route path="/doctor/patientList">
            <PatientList />
          </Route>
          <Route path="/doctor/drList">
            <DrList />
          </Route>
          <Route path="/doctor/todolist">
            <TodoList />
          </Route>
          <Route path="/doctor/weather">
            <Weather />
          </Route>
          <Route path="/doctor/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </DashRouter>
  );
}

export default DoctorDashboard;
