import React from "react";
import logo from "../imgs/logo.png";
import Navigation from "./Navigation";
import Vitruvianman from "../imgs/vitruvian.png";

const Navbar = () => {
  return (
    <div>
      <Navigation />
      <div className="header">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="text-wrap">
          <h1 className="title-wrap">
            <span className="title">
              ZO<span>&xi;</span>
            </span>
            <span className="subTitle">
              <i>your life matters</i>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
