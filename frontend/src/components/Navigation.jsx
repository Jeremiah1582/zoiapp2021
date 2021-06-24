import React, { Component, useState, useEffect } from "react";
import Home from "./Home";

const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navCheckbox" id="navigationToogle" />
      <label htmlFor="navigationToogle" className="navButton">
        MENU
      </label>
      <div className="navBackground">&nbsp;</div>
      <nav className="navNav">
        <ul className="navList">
          <li className="navItem">
            <a href="/" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              About us
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              Contact
            </a>
          </li>
          <li className="navItem">
            <a href="/user/registration" className="navLink">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

return (
  <div className="navigation">
    <input type="checkbox" className="navCheckbox" id="navigationToogle" />
    <label htmlFor="navigationToogle" className="navButton">
      MENU
    </label>
    <div className="navBackground">&nbsp;</div>
    <nav className="navNav">
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
          <a href="#" className="navLink">
            Contact
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            Login
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
