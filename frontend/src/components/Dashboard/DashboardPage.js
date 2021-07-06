import React from "react";
// import DashNav from './DashNav';
// import "../../styling/customDashboard.scss";
// import '../../styling/customDashboard.scss'
//dashNav Widgets:
import Home from './DashWidgets/Home'
import Calendar from "./DashWidgets/Calendar";
import Messages from "./DashWidgets/Messages";
import PatientList from "./DashWidgets/PatientList";
import DrList from "./DashWidgets/DrList";
import TodoList from "./DashWidgets/TodoList";
import Weather from "./DashWidgets/Weather";
import Settings from "./DashWidgets/Settings";
import { BrowserRouter as DashRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
function DashboardPage() {
  return (
    <DashRouter>
    <div className="page-container">
    {/* <img className='background-img' href='../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg' */}
      
         <div className="dash-nav-container">
          <ul className="dash-nav-items">
            <Link className="dash-menu-item dash-menu-link" to="/home">
              <i className="fas fa-home" />
            </Link>

            <Link className="dash-menu-item dash-menu-link" to="/calendar">
              <i className="fas fa-calendar-alt"></i>
            </Link>

            <Link className="dash-menu-item dash-menu-link" to="/messages">
              <i className="fas fa-comments"></i>
            </Link>

            <Link className="dash-menu-item dash-menu-link" to="/patientList">
              <i className="fas fa-user-injured"></i>
            </Link>

            <Link className="dash-menu-item dash-menu-link" to="/drList">
              <i className="fas fa-user-md"></i>
            </Link>

            <Link className="dash-menu-item dash-menu-link" to="/todolist">
              <i className="fas fa-th-list"></i>
            </Link>
             
            <Link className="dash-menu-item dash-menu-link" to="/settings">
              <i className="fas fa-cog"></i>
            </Link>
            
          </ul>
        </div>

        
          {/* <main className="widget-display">
          display
          </main> */}
          <Switch>
            <Route exact path="/home">
            <Home/>
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/patientList">
              <PatientList />
            </Route>
            <Route path="/drList">
              <DrList />
            </Route>
            <Route path="/todolist">
              <TodoList />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        
      
    </div>
    </DashRouter>
  );
}

export default DashboardPage;
