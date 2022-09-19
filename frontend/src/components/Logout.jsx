import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
// import Home from "./Home";
import logoNew from "../imgs/logoNew.png";
// import { MyContext } from "../Context_APIs/userContextAPI";

const Logout = () => {
  // save token in localStorage for login

  // const { userDrState, getUserDr } = useContext(MyContext);
  // const { userState, getUser } = useContext(MyContext);

  // console.log(userDrState);
  // console.log(userState);
  const [token, setToken] = useState("false");
  // useEffect
  useEffect(() => {
    const user = localStorage.getItem("currentToken");

    // previous code
    if (user) {
      // console.log(user);
      setToken(true);
      // getUserDr();
      // getUser();
    }

    // new code 26.11
    //   if (userState.accountType === "Patient") {
    //     getUser();
    //   } else if (userDrState.accountType === "Doctor") {
    //     getUserDr();
    //   } else {
    //     ("User not found!");
    //   }
  }, []);

  // logout and remove token
  const logout = () => {
    localStorage.removeItem("currentToken");
    setToken(false);
    window.location.href = "/";
  };
  return (
    <div className="navigation">
      {token ? (
        <Alert variant="success"> Welcome</Alert>
      ) : null}

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
          {/* <li className="navItem">
            <a href="/contact" className="navLink">
              Contact
            </a>
          </li> */}
          <li className="navItem">
            <a href="/" className="navLink" onClick={logout}>
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
