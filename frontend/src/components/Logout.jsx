import React, { useState, useEffect } from "react";
import {Alert} from 'react-bootstrap'
// import Home from "./Home";
import logoNew from "../imgs/logoNew.png";

const Logout = () => {
      // // save token in localStorage for login
  const [token, setToken] = useState("false");
  useEffect(() => {
    const user = localStorage.getItem("currentToken");
    if (user) {
      setToken(true);
    }
  }, []);

  // logout and remove token
  const logout = () => {
    localStorage.removeItem("currentToken");
    setToken(false);
    window.location.href = "/user/login";
  };
  return (
   <div className="navigation">
  {token? <Alert variant='success'> Welcome </Alert>: null}
      
      <input type="checkbox" className="navCheckbox" id="navigationToogle" />
      <label htmlFor="navigationToogle" className="navButton">
        MENU
      </label>
      <div className="navBackground">&nbsp;</div>

      <nav className="navNav">
        <div className="logo-box">
          <img src={logoNew} alt="logo" className="logo" />
        </div>

        <ul className="navList">
          <li className="navItem">
            <a href="/" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="/aboutzoe" className="navLink">
              About us
            </a>
          </li>
          <li className="navItem">
            <a href="/zoeteam" className="navLink">
              ZOE Team
            </a>
          </li>
          <li className="navItem">
            <a href="/contact" className="navLink">
              Contact
            </a>
          </li>
          <li className="navItem">
            <a href="/user/login" className="navLink" 
            onClick ={logout} >
              Log Out
            </a>
          </li>
          {/* <li className="navItem">
            <a href="/signup" className="navLink">
              Sign up
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Logout;
