import React, { useState } from "react";
// import logo from "../imgs/logo.png";
import Navigation from "./Navigation";
import logoNew from "../imgs/logoNew.png";

const Navbar = () => {
  // Function for I am a Doctor Button
  const doctorText = (e) => {
    e.target.style.width = "auto";
    if (e.target.getElementsByTagName("b").length)
      e.target.getElementsByTagName("b")[0].innerText = `I am a Doctor`;
  };

  // Function for I am a Patient Button
  const patientText = (e) => {
    e.target.style.width = "auto";
    if (e.target.getElementsByTagName("b").length)
      e.target.getElementsByTagName("b")[0].innerText = `I am a Patient`;
  };

  // Function to display Login/SingUp Text on Buttons
  const displayText = (e) => {
    const currentWidth = e.target.offsetWidth;
    e.target.style.width = currentWidth + "px";
    if (e.target.getElementsByTagName("b").length)
      e.target.getElementsByTagName("b")[0].innerText = `Login now`;
  };
  return (
    <div>
      <Navigation />
      <div className="header">
        <div className="logo-box">
          <img src={logoNew} alt="logo" className="logo" />
        </div>
        <div className="text-wrap">
          <h1 className="title-wrap">
            <span className="title">
              ZO<span>&xi;</span>
            </span>
            <span className="subTitle">
              <i>online booking solution</i>
            </span>
          </h1>
        </div>
      </div>
      <div className="buttons">
        <a
          href="/user/login"
          className="buttonNavbar"
          onMouseOver={displayText}
          onMouseLeave={doctorText}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <b>I am a Doctor</b>
        </a>
        <a
          href="/user/login"
          className="buttonNavbar"
          onMouseOver={displayText}
          onMouseLeave={patientText}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <b>I am a Patient</b>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
