import React, { Component }  from 'react';
import Home  from './Home';
import logoNew from '../imgs/logoNew.png';


const Navigation = () => {
  return (
      <div className= "navigation">
        <input type="checkbox" className = "navCheckbox" id="navigationToogle" />
        <label htmlFor="navigationToogle" className= "navButton"  >
            MENU</label>
        <div className="navBackground"  >&nbsp;</div>
            
        <nav className="navNav">
        <div className="logo-box">
                <img src={ logoNew } alt="logo" className="logo" />
        </div>
                
  
        <ul className="navList">
          <li className="navItem">
            <a href="/" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="/about" className="navLink">
              About us
            </a>
          </li>
          <li className="navItem">
            <a href="/zoeteam" className="navLink">
              ZOE Team
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              Contact
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              Login
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
