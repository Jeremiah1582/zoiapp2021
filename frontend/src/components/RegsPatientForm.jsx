import React,{useState} from 'react'
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {Form, Button, Card, Image, FormControl,InputGroup,DropdownButton} from 'react-bootstrap';
import PatientImage from '../imags/userlogin02.jpg'
import axios from "axios";

const RegsPatientForm = () => {

  const [userSignUp,setUserSignUp]= useState({
      firstName:"",
      lastName:"",
      birthDate:"",
      email:"",
      mobileNumber:"",
      password:"",
      insuranceCompany:"",
      insuranceNumber:"",
      streetName:"",
      houseNumber:"",
      postalCode:"",
      city:"",
      country:""
  })

  const [message, setMessage]= useState("");

  // handleChange function
  const handleFormInput=(e)=>{
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value
    })
  }
  
  // send to backend handler function
  const sendToBackEnd=(e)=>{
    e.preventDefault();
    if(
      userSignUp.email !== "" &&
      userSignUp.password !== ""
    ) {

      axios.post("/user/signUp", userSignUp).then(res=>{

        setUserSignUp({
          firstName:"",
          lastName:"",
          birthDate:"",
          email:"",
          mobileNumber:"",
          password:"",
          insuranceCompany:"",
          insuranceNumber:"",
          streetName:"",
          houseNumber:"",
          postalCode:"",
          city:"",
          country:""
        })

        window.location.href="/user/login";

      })
      
      }else{

        setMessage('Please fill the required fields!')
  }
  }

    return (
       <div>
  
    <div className='card-container'> {/*to customise Bootstrap classes i found it easier to wrap the class in a div and use scss to manipulate the divs' content */}
   
  <Image src={PatientImage} className='reg-img'  fluid />
  <Card className="signUpForm" style={{ width: '25rem', height: '100vh'}}>
      <Form className='form-class' onSubmit= {sendToBackEnd}>
  {/* First Name */}
  <Form.Group className='input-field name' controlId="formBasicName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control name='firstName' type="text" placeholder="First Name" onChange={(e)=>{handleFormInput(e)}} />
        
    
      </Form.Group>
  {/* Last Name */}
  <Form.Group  className='input-field name' controlId="formBasicEmail">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control name='lastName' type="text" placeholder="Last Name" onChange={(e)=>{handleFormInput(e)}}/>
        
    
      </Form.Group>
  
  {/* email */}
      <Form.Group className='input-field' controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=>{handleFormInput(e)}}/>
        
  
      </Form.Group>
  {/* contact Number */}
      <Form.Group className='input-field' controlId="formBasicEmail">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control name='mobileNumber' type="number" placeholder="Enter phone number" onChange={(e)=>{handleFormInput(e)}}/>
        
  
      </Form.Group>
  {/* Licence Number */}
      <Form.Group className='input-field' controlId="formBasicEmail">
        <Form.Label>Licence Number:</Form.Label>
        <Form.Control name='licenseNumber' type="text" placeholder="Enter license  number" onChange={(e)=>{handleFormInput(e)}} />
       
      </Form.Group>
  
  {/* upload Files */}
      <Form className='input-field' name='qualifications' >
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Upload Qualification:" />
        </Form.Group>
      </Form>
  {/* Password */}
      <Form.Group className='input-field' controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={(e)=>{handleFormInput(e)}}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      </Form.Group>
  {/* Confirm Password */}
      <Form.Group className='input-field' controlId="formBasicPassword">
        <Form.Control name='confirmedPassword' type="password" placeholder="Confirm Password" onChange={(e)=>{handleFormInput(e)}}/>
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
  {/* upload documents */}
  
      
  
      <Button type="submit">
        Sign Up
      </Button>
      </Form>
    </Card>
  </div>
  </div>
    )
}

export default RegsPatientForm;
