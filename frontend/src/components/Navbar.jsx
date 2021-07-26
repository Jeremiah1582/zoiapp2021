import React from "react";
// import logo from "../imgs/logo.png";
import Navigation from "./Navigation";
import logoNew from "../imgs/logoNew.png";

const Navbar = () => {
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
              <i>Online Booking Solution</i>
            </span>
          </h1>
        </div>
      </div>
      <div className="buttons">
        <a href="/doctor/registration" className="buttonNavbar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Im a Doctor
        </a>
        <a href="/patient/registration" className="buttonNavbar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Im a Patient
        </a>
      </div>
    </div>
  );
};

export default Navbar;
