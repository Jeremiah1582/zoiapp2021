import React from "react";
// import DashNav from './DashNav';
// import "../../styling/customDashboard.scss";
<<<<<<< HEAD

//dashNav Widgets:
import Home from './PatientWidgets/Home'
=======
import '../../styling/customDashboard.css'
//dashNav Widgets:
import Home from "./PatientWidgets/PDashHome";
>>>>>>> 31fd17caeb9b7455f253ffd9cef7091627ac12b2
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
      <h3>Patient Dashboard</h3>
      <div className="page-container">
        {/* <img className='background-img' href='../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg' */}

        <div className="dash-nav-container">
          <ul className="dash-nav-items">
            <Link className="dash-menu-item dash-menu-link" to="/home">
              <i className="fas fa-home" />
            </Link>
<<<<<<< HEAD
           <Link className="dash-menu-item dash-menu-link" to="/FindDoctor">
=======
            <Link className="dash-menu-item dash-menu-link" to="/finddoctor">
>>>>>>> 31fd17caeb9b7455f253ffd9cef7091627ac12b2
              <i className="fas fa-user-md"></i>
            </Link>
            {/* <Link className="dash-menu-item dash-menu-link" to="/calendar">
              <i className="fas fa-calendar-alt"></i>
            </Link> */}

            {/* <Link className="dash-menu-item dash-menu-link" to="/messages">
              <i className="fas fa-comments"></i>
            </Link> */}
<<<<<<< HEAD
{/* 
            <Link className="dash-menu-item dash-menu-link" to="/patientList">
              <i className="fas fa-user-injured"></i>
            </Link> */}

            

=======

            {/* <Link className="dash-menu-item dash-menu-link" to="/patientList">
              <i className="fas fa-user-injured"></i>
            </Link> */}

>>>>>>> 31fd17caeb9b7455f253ffd9cef7091627ac12b2
            {/* <Link className="dash-menu-item dash-menu-link" to="/todolist">
              <i className="fas fa-th-list"></i>
            </Link> */}

            {/* <Link className="dash-menu-item dash-menu-link" to="/settings">
              <i className="fas fa-cog"></i>
            </Link> */}
<<<<<<< HEAD
            
=======
>>>>>>> 31fd17caeb9b7455f253ffd9cef7091627ac12b2
          </ul>
        </div>

        {/* <main className="widget-display">
          display
          </main> */}
<<<<<<< HEAD
          <Switch>
            <Route exact path="/home">
            <Home/>
            </Route> 
            <Route path="/FindDoctor">
              <FindDoctor />
            </Route>
            {/* <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/patientList">
              <PatientList />
            </Route>
           
            <Route path="/todolist">
              <TodoList />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route> */}
          </Switch>
        
      
    </div>
=======
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          {/* <Route path="/calendar">
            <Calendar />
          </Route> */}
          {/* <Route path="/messages">
            <Messages />
          </Route> */}
          {/* <Route path="/patientList">
            <PatientList />
          </Route> */}
          <Route path="/finddoctor">
            <FindDoctor />
          </Route>
          {/* <Route path="/todolist">
            <TodoList />
          </Route> */}
          {/* <Route path="/weather">
            <Weather />
          </Route> */}
          {/* <Route path="/settings">
            <Settings />
          </Route> */}
        </Switch>
      </div>
>>>>>>> 31fd17caeb9b7455f253ffd9cef7091627ac12b2
    </DashRouter>
  );
}

export default PatientDashboard;
