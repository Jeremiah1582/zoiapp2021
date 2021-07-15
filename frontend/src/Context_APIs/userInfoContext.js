import React, {useState, useEffect} from 'react'
import axios from 'axios'


// function User() {
    
// const [user, setUser] = useState({})

//     const getUserInfo=() => {
//     useEffect(() => {
//     const userToken = localStorage.getItem("currentToken");
//     console.log(userToken);
//     axios
//       .post("http://localhost:5000/patient/bookingForm", { userToken })
//       .then((res) => {
//         console.log(res.data);
//         setUser(res.data)
//         // setUser({
//         //     firstName: res.data.firstName,
//         //     lastName: res.data.lastName ,
//         //     birthDate: res.data.birthDate,
//         //     email: res.data.email,
//         //     mobileNumber: res.data.mobileNumber,
//         //     insuranceCompany: res.data.insuranceCompany,
//         //     insuranceNumber: res.data.insuranceNumber,  
//         // })
//       });
//   });
// }
// console.log(user);


//   return(
// <div>
// <h1>{user.firstName}</h1>
// </div>

//   )
// }

// export default User


 const getUserInfo=() => {
    useEffect(() => {
    const userToken = localStorage.getItem("currentToken");
    console.log(userToken);
    axios
      .post("http://localhost:5000/patient/bookingForm", { userToken })
      .then((res) => {
        console.log(res.data);
        setUser(res.data)
        // setUser({
        //     firstName: res.data.firstName,
        //     lastName: res.data.lastName ,
        //     birthDate: res.data.birthDate,
        //     email: res.data.email,
        //     mobileNumber: res.data.mobileNumber,
        //     insuranceCompany: res.data.insuranceCompany,
        //     insuranceNumber: res.data.insuranceNumber,  
        // })
      });
  });
}


