import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
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
  setUserSignUp({
      ... userSignUP,

  })
    return (
        <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="First Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                    <MDBInput
                    label="Last Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                     <MDBInput
                    label="Your Birthdate"
                    icon="user"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                  />
                    <MDBInput
                    label="Insurance Company"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                    <MDBInput
                    label="Insurance Number"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                    <MDBInput
                    label="Street Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                   <MDBInput
                    label="House Nr."
                    icon="user"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                  />
                   <MDBInput
                    label="Postal Code"
                    icon="user"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                  />
                   <MDBInput
                    label="City"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Country"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
}

export default RegsPatientForm;
