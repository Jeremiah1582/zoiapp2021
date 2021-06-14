import React from 'react';
import ReactDOM from "react-dom";
import Home from './components/Home';
import Patient from './components/Patient';
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
          
          {/* <Route exact path = '/contacto'>
            <Contacto />
          </Route> */}
          
         {/*  <Route exact path = '/nosotros'>
            <Nosotros />
          </Route> */}

          <Route exact path = '/patient'>
            <Patient />
          </Route>
          
          <Route exact path = '/'>
            <Home />
          </Route>
            
         {/*  <Route exact path = '/nosotros/:id'>

          </Route> */}
        
        </Switch>
      </div>
    </Router>
    
  )
}

export default App

