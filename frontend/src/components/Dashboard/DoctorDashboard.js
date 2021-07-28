import React, { useContext, useEffect } from "react";
// import DashNav from './DashNav';
// import "../../styling/customDashboard.scss";
// import "../../styling/customDashboard.css";
//dashNav Widgets:
import Logout from "../Logout";
import Home from "./DashWidgets/Home";
import SetAppointmentTimes from "./DashWidgets/SetAppointmentTimes";
import Messages from "./DashWidgets/Messages";
import DrAppointmentList from "./DashWidgets/DrAppointmentList";
import FindDoctor from "./DashWidgets/DrFindDoctor";
import TodoList from "./DashWidgets/TodoList";
import Weather from "./DashWidgets/Weather";
import Settings from "./DashWidgets/Settings";
import { BrowserRouter as DashRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import { MyContext } from "../../Context_APIs/userContextAPI";

function DoctorDashboard() {
  const { userDrState, getUserDr } = useContext(MyContext);

  useEffect(() => {
    getUserDr();
  }, []);
  // console.log(userDrState);

  return (
    <DashRouter>
      <Logout />

      <div className="dash-container">
        {/* <img className='background-img' href='../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg' */}

        <div className="dash-nav-container">
          <ul className="dash-nav-items">
            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/dashboard/home"
            >
              <i className="fas fa-home" />
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/dashboard/SetAppointmentTimes"
            >
              <i className="fas fa-calendar-alt"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/dashboard/finddoctor"
            >
              <i className="fas fa-user-md"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/dashboard/appointmentlist"
            >
              <i class="fas fa-calendar-check"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/dashboard/messages"
            >
              <i class="fas fa-sms"></i>
            </Link>{" "}
            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/dashboard/weather"
            >
              <i class="fas fa-cloud-sun-rain"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/doctor/dashboard/todolist"
            >
              <i className="fas fa-th-list"></i>
            </Link>
            <Link
              className="dash-menu-item dash-menu-link"
              to="/user/dashboard/settings"
            >
              <i className="fas fa-cog"></i>
            </Link>
          </ul>
        </div>

        <div className="widget-container">
          <Switch>
            <Route exact path="/doctor/dashboard/home">
              <Home />
            </Route>
            <Route path="/doctor/dashboard/SetAppointmentTimes">
              <SetAppointmentTimes />
            </Route>
            <Route path="/doctor/dashboard/messages">
              <Messages />
            </Route>
            <Route path="/doctor/dashboard/appointmentlist">
              <DrAppointmentList />
            </Route>
            <Route path="/doctor/dashboard/finddoctor">
              <FindDoctor />
            </Route>
            <Route path="/doctor/dashboard/todolist">
              <TodoList />
            </Route>
            <Route path="/doctor/dashboard/weather">
              <Weather />
            </Route>
            <Route path="/doctor/dashboard/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </DashRouter>
  );
}

export default DoctorDashboard;
