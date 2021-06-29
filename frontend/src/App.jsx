import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Footer from "./components/Footer";
import Team from './components/Team'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
  Redirect,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">

        {/* *******for dinamic contain******** */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/zoeteam" component={About}>
            <Team />
          </Route>

          <Route exact path= "/about">
            { About }
          </Route>

          <Route exact path = '/signup' component = { Signup }>
            <Signup />
          </Route>
            
         
        </Switch>
      </div>
    </Router>
  );
};

export default App;
