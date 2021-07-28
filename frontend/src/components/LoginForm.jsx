import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
// import NavBar from "./Navbar";
import Navigation from "./Navigation";
// import "../styling/customRegForm.css";
import UserImage from "../imgs/userlogin03.jpg";
import axios from "axios";

const LoginForm = (prop) => {
  // useState
  const [UserLogin, setUserLogin] = useState({
    email: "",
    password: "",
    condition: prop.accountType,
  });

  // const [condition, setCondition] = useState("patient");

  const [message, setMessage] = useState("");

  // handleChange function
  const handleChange = (e) => {
    setUserLogin({
      ...UserLogin,
      [e.target.name]: e.target.value,
    });
  };

  // account type function
  // const accountType = () => {
  //   setUserLogin({ ...UserLogin, condition: prop.accountType });
  // };
  // console.log(UserLogin.condition, "is here");
  // submit function
  const submit = (e) => {
    e.preventDefault();
    if (UserLogin.email !== "") {
      console.log(UserLogin, "from line 35");
      // JWToken
      axios.post("http://localhost:5000/user/login", UserLogin).then((res) => {
        console.log(res.data);

        // localStorage
        localStorage.setItem("currentToken", res.data.token);
        if (UserLogin.condition === "patient") {
          window.location.href = "/patient/dashboard/home";
        } else if (UserLogin.condition === "doctor") {
          window.location.href = "/doctor/dashboard/home";
        }
      });
    } else {
      setMessage("All fields are required!");
    }
  };

  // form 1
  return (
    <div>
     
      <Navigation/>
        <div className="login-container1">
       {/* {prop.accountType ==='doctor'?
       : <div className="login-container2">} */}

        {/* Photo-Container  */}

       
        <div className="login-img-container1">
          <Image className="login-img"/>
           </div>
        
          
        
        <div className="login-form">
          <p class="warningMsg"> {message} </p>
          <Form onSubmit={submit} className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={UserLogin.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={UserLogin.password}
                onChange={handleChange}
                placeholder=" Enter your password"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Account Type</Form.Label>
              <div
                className="reg-discipline"
              >
               {prop.accountType.toUpperCase()}
              </div>

            </Form.Group>
            <Button variant="primary" type="submit" style={{textAlign:'center'}}>
              Log in
            </Button>
            <Form.Group>
              {/* Sign Up form link */}
              <div class="w-100 text-center">
                <p class="p mt-4">
                  Don't have an account! <br/>
                  <Button type="btn" href="/doctor/registration" className="login-link reg-discipline">
                    Sign Up as Doctor
                  </Button>
                  <Button type="btn" href="/patient/registration" className="login-link reg-discipline">
                    Sign Up as Patient
                  </Button>
                </p>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
