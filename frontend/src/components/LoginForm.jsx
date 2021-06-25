import React,{useState} from 'react';
// import {Form, Button} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import axios from 'axios';

const LoginForm = () => {

  // useState
  const [user, setUser]= useState({
    email:"",
    password:""
  })
   const [message, setMessage]= useState('');

   // handleChange function
   const handleChange=(e)=>{
     setUser({
       ...user,
       [e.target.name]: e.target.value
     })
   }
   // submit function
   const submit =(e)=>{
     e.preventDefault();
     if (user.email !== ''){
       // JWToken should added later
       axios.post("/user/login", user)
       .then((res)=>{
         console.log(res.data);

         // localStorage
         localStorage.setItem('currentToken',res.data);
         window.location.href="/patient";
       });
     } 
     else{
       setMessage("All fields are required!")
     }

   }

   // form 1
//     return (
//         <div>
//           <p class = "warningMsg"> {message} </p>
//             <Form onSubmit={submit} >
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email"
//     name="email"
//     value={user.email}
//     onChange={handleChange}
//     placeholder="Enter your email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" 
//     name="password"
//     value={user.password}
//     onChange={handleChange}
//     placeholder=" Enter your password" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Remind me" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Log in
//   </Button>
// </Form>
//         </div>
//     )

    // form 2
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={submit} >
                  <p className="h4 text-center py-4">Log in</p>
                  <div className="grey-text">
                   <p class = "warningMsg"> {message} </p>
                   
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      placeholder=" Enter your password"
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Log in
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );

}

export default LoginForm
