import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import NavBar from "./Navbar";

import axios from "axios";

const LoginForm = () => {
  // useState
  const [UserLogin, setUserLogin] = useState({
    email: "",
    password: "",
    condition: "",
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
  const accountType = (e) => {
    setUserLogin({ ...UserLogin, condition: e.target.value });
  };
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
        localStorage.setItem("currentToken", res.data);
        if (UserLogin.condition === "patient") {
          window.location.href = "/patient/dashboard";
        } else if (UserLogin.condition === "doctor") {
          window.location.href = "/doctor/dashboard";
        }
      });
    } else {
      setMessage("All fields are required!");
    }
  };

  // form 1
  return (
    <div>
      <NavBar />
      <p class="warningMsg"> {message} </p>
      <Form onSubmit={submit}>
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
            We'll never share your email with anyone else.
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
          <Form.Control as="select" name="condition" onChange={accountType}>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remind me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
