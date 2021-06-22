import React, {useState} from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { Form, Button, Card, Image, DropdownButton, Dropdown} from 'react-bootstrap';
import '../styling/custom_bootstrap.sass'
import DocImage from '../imgs/medicine-vector-flat-illustration.png'
import specialistField from '../../Context_APIs/specialistFields.js'
const TestRegistration = () => {
const [coutryCode, setcoutryCode] = useState()


const [formData, setFormData] = useState({
   
    firstName: '',
    lastName:'' ,
    email:'' ,
    mobileNumber:'',
    password: '',
    licenseNumber:'',
    specialistIn: ''
})

const handleFormInput=(e)=>{
  setFormData({...formData,[e.target.name]: e.target.value})
  


}

  return (
  <div>
  
  <div className='card-container'> {/*to customise Bootstrap classes i found it easier to wrap the class in a div and use scss to manipulate the divs' content */}
 
<Image src={DocImage} className='reg-img'  fluid />
<Card className="signupForm" style={{ width: '25rem', height: '100vh'}}>
    <Form className='form-class'>
{/* First Name */}
<Form.Group className='input-field name' controlId="formBasicEmail">
      <Form.Label>First Name:</Form.Label>
      <Form.Control name='firstName' type="text" placeholder="first Name" onChange={(e)=>{handleFormInput(e)}} />
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>
{/* Last Name */}
<Form.Group  className='input-field name' controlId="formBasicEmail">
      <Form.Label>Last Name:</Form.Label>
      <Form.Control name='lastName' type="text" placeholder="Last Name" onChange={(e)=>{handleFormInput(e)}}/>
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>

{/* email */}
    <Form.Group className='input-field' controlId="formBasicEmail">
      <Form.Label>Email address:</Form.Label>
      <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=>{handleFormInput(e)}}/>
      <Form.Text className="text-muted">
      
      </Form.Text>
    </Form.Group>
{/* contact Number */}
    <Form.Group className='input-field' controlId="formBasicEmail">
      <Form.Label>Phone Number:</Form.Label>
      <Form.Control name='mobilenumber' type="number" placeholder="enter phone number" onChange={(e)=>{handleFormInput(e)}}/>
      <Form.Text className="text-muted">
      
      </Form.Text>
    </Form.Group>
{/* Licence Number*/}
    <Form.Group className='input-field' controlId="formBasicEmail">
      <Form.Label>Licence Number:</Form.Label>
      <Form.Control name='licenseNumber' type="text" placeholder="enter licence phone number" onChange={(e)=>{handleFormInput(e)}} />
      <Form.Text className="text-muted">
      
      </Form.Text>
    </Form.Group>
{/* Specialist Field */}
    <Form.Group className='input-field' controlId="formBasicEmail">
    <Form.Label >Specialist Field:</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Select practice field">
      {specialistField.map((item)=>{return(
        <Dropdown.Item href="#">{item}</Dropdown.Item>
      )})} 
      </DropdownButton>
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
      <Form.Control name='confirm password' type="password" placeholder="Confirm Password" onChange={(e)=>{handleFormInput(e)}}/>
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
  );
};

export default TestRegistration ;



