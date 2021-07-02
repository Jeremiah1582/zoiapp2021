import React from 'react';
import ReactDOM from "react-dom";
import Home from './components/Home';
import About from './components/About';
import DrRegForm from './components/DrRegForm.js'
import PatientRegForm from './components/RegsPatientForm'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
  Redirect,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router >

      <div className = "container">
        {/* <div className="btn-group m-5">
          <NavLink to = '/' className = 'btn btn-primary m-3  activeClassName="active"'>Inicio</NavLink>
          
          <NavLink to = '/nosotros' className = 'btn btn-primary m-3'>Nosotros</NavLink>
          
          <NavLink to = '/contacto' className = 'btn btn-primary m-3'>Contacto</NavLink>
        </div> */}

        {/* *******for dinamic contain******** */}

        <Switch> 
        
          <Route exact path = '/'>
            <Home />
          </Route>
          
          <Route  path = '/about'>
            <About />
          </Route>
          
          <Route  path ='/registration/doctor'>
            <DrRegForm/>
          </Route>
            
          <Route  path ='/registration/patient'>
            <PatientRegForm/>
          </Route>
            
         {/*  <Route exact path = '/nosotros/:id'>

          </Route> 
          
          <Route exact path = '/patient'>
            <Patient />
          </Route>*/
          }
        
        </Switch>
      </div>
    </Router>
    
  )
}

export default App

