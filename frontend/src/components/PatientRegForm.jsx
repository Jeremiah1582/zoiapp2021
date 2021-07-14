import React, { useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Form, Button, Card, Image, Alert } from "react-bootstrap";
import PatientImage from "../imgs/userlogin02.jpg";
import axios from "axios";
// import '../styling/customRegForm.css'

const PatientRegForm = () => {
  // patient state
  const [patientSignUp, setPatientSignUp] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmedPassword: "",
    insuranceCompany: "",
    insuranceNumber: "",
    street: "",
    houseNr: "",
    postalCode: "",
    city: "",
    country: "",
  });
  const { password, confirmedPassword } = patientSignUp;

  // Error message state
  const [message, setMessage] = useState("");

  // handleChange function
  const handleFormInput = (e) => {
    setPatientSignUp({
      ...patientSignUp,
      [e.target.name]: e.target.value,
    });
  };

  // confirm password function
  const confirmPassword = (e) => {
    if (confirmedPassword === password) {
      return <Alert className="warning">Password does not match</Alert>;
      // console.log("no match", confirmedPassword, password);
    } else {
      return <Alert className="success">Passwords Match</Alert>;
      // console.log("Match");
    }
  };

  // send to backend handler function
  const sendToBackEnd = (e) => {
    e.preventDefault();
    if (patientSignUp.email !== "" && patientSignUp.password !== "") {
      axios
        .post("http://localhost:5000/patient/registration", patientSignUp)
        .then((res) => {
          setPatientSignUp({
            firstName: "",
            lastName: "",
            birthDate: "",
            email: "",
            mobileNumber: "",
            password: "",
            confirmedPassword: "",
            insuranceCompany: "",
            insuranceNumber: "",
            street: "",
            houseNr: "",
            postalCode: "",
            city: "",
            country: "",
          });
          // redirecting to login page
          window.location.href = "/user/login";
        });
    } else {
      setMessage("Please fill the required fields!");
    }
  };

  return (
    <div className="doc-reg">
      <Navigation />
      <div className="reg-container" >
        <div className="img-container">
          <Image src={PatientImage} className="reg-img" fluid />
        </div>
        <div className="form-container">
          <Card
            className="signUpForm"
            style={{ width: "50rem", height: "100" }}
          >
            <Form className="form-class form" onSubmit={sendToBackEnd}>
              {/* First Name */}
              <Form.Group
                className="input-field name d-flex align-items-center"
                controlId="formBasicFirstName"
              >
                <Form.Label >First Name:</Form.Label>
                <Form.Control
                  name="firstName"
                  value={patientSignUp.firstName}
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>
              {/* Last Name */}
              <Form.Group
                className="input-field name"
                controlId="formBasicLastName"
              >
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  name="lastName"
                  value={patientSignUp.lastName}
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* Birth Date */}
              <Form.Group className="input-field" controlId="formBasicBirthDate">
                <Form.Label>Date of Birth:</Form.Label>
                <Form.Control
                  name="birthDate"
                  value={patientSignUp.birthDate}
                  type="date"
                  placeholder="Enter date of birth"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* Insurance Company Name */}
              <Form.Group
                className="input-field name"
                controlId="formBasicEmail"
              >
                <Form.Label>Insurance Company:</Form.Label>
                <Form.Control
                  name="insuranceCompany"
                  value={patientSignUp.insuranceCompany}
                  type="text"
                  placeholder="Insurance Company"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* Insurance Number */}
              <Form.Group className="input-field" controlId="formBasicInsuranceNumber">
                <Form.Label>Insurance Number:</Form.Label>
                <Form.Control
                  name="insuranceNumber"
                  value={patientSignUp.insuranceNumber}
                  type="text"
                  placeholder="Enter insurance number"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* email */}
              <Form.Group className="input-field" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  name="email"
                  value={patientSignUp.email}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* Address Details */}

              {/* Street Name */}
              <Form.Group
                className="input-field name"
                controlId="formBasicEmail"
              >
                <Form.Label>Street Name:</Form.Label>
                <Form.Control
                  name="street"
                  value={patientSignUp.street}
                  type="text"
                  placeholder="Street Name"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* House Number */}
              <Form.Group
                className="input-field name"
                controlId="formBasicEmail"
              >
                <Form.Label>House Nr.:</Form.Label>
                <Form.Control
                  name="houseNr"
                  value={patientSignUp.houseNr}
                  type="number"
                  placeholder="House Nr"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* Postal Code */}
              <Form.Group
                className="input-field name"
                controlId="formBasicEmail"
              >
                <Form.Label>Postal Code:</Form.Label>
                <Form.Control
                  name="postalCode"
                  value={patientSignUp.postalCode}
                  type="number"
                  placeholder="Postal Code"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* City Name */}
              <Form.Group
                className="input-field name"
                controlId="formBasicEmail"
              >
                <Form.Label>City:</Form.Label>
                <Form.Control
                  name="city"
                  value={patientSignUp.city}
                  type="text"
                  placeholder="City Name"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>
              {/* Country Name */}
              <Form.Group
                className="input-field name"
                controlId="formBasicEmail"
              >
                <Form.Label>Country:</Form.Label>
                <Form.Control
                  name="country"
                  value={patientSignUp.country}
                  type="text"
                  placeholder="Country Name"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* contact Number */}
              <Form.Group className="input-field" controlId="formBasicEmail">
                <Form.Label>Mobile Number:</Form.Label>
                <Form.Control
                  name="mobileNumber"
                  value={patientSignUp.mobileNumber}
                  type="number"
                  placeholder="Enter mobile number"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="input-field" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={patientSignUp.password}
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              {/* Confirm Password */}
              <Form.Group
                className="input-field"
                controlId="formBasicConfirmedPassword"
              >
                <Form.Control
                  name="confirmedPassword"
                  value={patientSignUp.confirmedPassword}
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    handleFormInput(e);
                  }}
                />
                <Button
                  onClick={(e) => {
                    confirmPassword(e);
                  }}
                >
                  Check Passwords
                </Button>
              </Form.Group>
              <div className="reg-form-footer">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                  />
                  <Form.Check
                    required
                    label="I confirm that this information is correct"
                    feedback="You must agree before submitting."
                  />
                </Form.Group>
              </div>
              <Button type="submit">Sign Up</Button>
            </Form>
            {/* Log in form link */}
            <div class="w-100 text-center">
              <p class="p mt-4">
                Have already an account!
                <a type="btn" href="/user/login" class="login-link">
                  Log In
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatientRegForm;
