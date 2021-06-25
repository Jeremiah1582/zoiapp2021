import React, { useState } from "react";
import { Form, Button, Card, Image } from "react-bootstrap";
import specialistAPI from "../Context_APIs/specialistFields";
import DocImage from "../imgs/medicine-vector-flat-illustration.png";
import "../styling/custom_reg_bootstrap.css";

function DrRegBootstrap() {
  // states
  const [DrUser, setDrUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmedPassword: "",
    licenceNumber: "",
    specialistFields: [],
    file: '', //output= string path of the file 
  });

  const { specialistFields } = DrUser;
  // add new Dr details
  const handleFormInput = (e) => {
    setDrUser({ ...DrUser, [e.target.name]: e.target.value });
  };

  // Add function specialist Field
  const handleSpecialistInput = (item) => {
    console.log(item);
    const newSpecialistFields = [...specialistFields, item];
    setDrUser({ ...DrUser, specialistFields: newSpecialistFields });
    // DrUser.specialistFields.push(`${item}`)
  };

  // delete function specialist Field
  const deleteField = (e) => {
    const index = e.target.id;
    console.log(index);
    const newSpecialistFields = [...specialistFields];
    newSpecialistFields.splice(index, 1);
    setDrUser({ ...DrUser, specialistFields: newSpecialistFields });
  };

  //send to back end handler
  const sendToBackEnd = (DrUser) => {
    //send form data to the back to save in MongoDB
  };

  //handle form Data
  console.log(DrUser);
  return (
    <div className="container">
      <Image src={DocImage} className="reg-img" fluid />

      <Card className="signupForm">
        <Form className="form" onSubmit={sendToBackEnd}>
          {/* First Name */}
          <Form.Group className="input-field name" controlId="formBasicName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              value={DrUser.firstName}
              placeholder="First Name"
              onChange={(e) => {
                handleFormInput(e);
              }}
            />
          </Form.Group>
          {/* Last Name */}
          <Form.Group
            className="input-field name"
            controlId="formBasicFirstEmail"
          >
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              value={DrUser.lastName}
              placeholder="Last Name"
              onChange={(e) => {
                handleFormInput(e);
              }}
            />
          </Form.Group>

          {/* email */}
          <Form.Group className="input-field" controlId="formBasicLastName">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={DrUser.email}
              placeholder="Enter email"
              onChange={(e) => {
                handleFormInput(e);
              }}
            />
          </Form.Group>
          {/* contact Number */}
          <Form.Group className="input-field" controlId="formBasicEmail">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              name="mobileNumber"
              type="number"
              value={DrUser.mobileNumber}
              placeholder="Enter phone number"
              onChange={(e) => {
                handleFormInput(e);
              }}
            />
          </Form.Group>
          {/* Licence Number */}
          <Form.Group
            className="input-field"
            controlId="formBasicLicenceNumber"
          >
            <Form.Label>Licence Number:</Form.Label>
            <Form.Control
              name="licenceNumber"
              type="text"
              value={DrUser.licenceNumber}
              placeholder="Enter licence number"
              onChange={(e) => {
                handleFormInput(e);
              }}
            />
          </Form.Group>
          {/* Specialist Field */}

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>

            <Form.Control
              name="specialistFields"
              as="select"
              type="text"
              onChange={(e) => {
                console.log("onSelect is", e.target.value);
                const selectedItem = e.target.value;
                handleSpecialistInput(selectedItem);
              }}
            >
              {specialistAPI.map((item, index) => {
                return (
                  <option key={index} value={item.field}>
                    {item.field}
                  </option>
                );
              })}
            </Form.Control>

            <div className="discipline-container">
              {DrUser.specialistFields.map((item, index) => {
                return (
                  <div
                    id={index}
                    key={index}
                    className="reg-discipline"
                    onClick={(e) => {
                      deleteField(e);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </Form.Group>

          {/* upload Files */}
          <Form className="input-field" >
            <Form.Group>
              <Form.File
              name='file' 
              onChange={(e) => {
                handleFormInput(e);
              }}
              value={DrUser.file}
              id="exampleFormControlFile1"
              label="Upload Qualification:"
              />
            </Form.Group>
          </Form>
          {/* Password */}
          <Form.Group className="input-field" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={DrUser.password}
              onChange={(e) => {
                handleFormInput(e);
              }}
            />
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group
            className="input-field"
            controlId="formBasicConfirmPassword"
          >
            <Form.Control
              name="confirmedPassword"
              type="password"
              placeholder="Confirm Password"
              value={DrUser.confirmedPassword}
              onChange={(e) => {
                handleFormInput(e);
              }}
            />
          </Form.Group>
          <div className="reg-form-footer">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                value={true}
              />
              <Form.Check
                required
                label="I confirm that this information is correct"
                feedback="You must agree before submitting."
                value={true}
              />
            </Form.Group>
          </div>
          {/* upload documents */}

          <Button type="submit">Sign Up</Button>
        </Form>
      </Card>
    </div>
  );
}

export default DrRegBootstrap;
