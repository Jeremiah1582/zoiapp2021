import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'
export const MyContext= React.createContext()

//reducer---------------------------------------------------


// const reducer=(userState, action)=>{
//     switch(action.type){
//         case 'GETUSER':{
// //call axios 
// const userToken = localStorage.getItem("currentToken");
//     console.log(userToken);
//     axios
//       .post("http://localhost:5000/patient/bookingForm", { userToken })
//       .then((res) => {
//         console.log(res.data, 'reducer line 15 context_api');


//       });
//   return [...userState,
// {
//     firstName: action.payload.firstName,
//     lastName: action.payload.lastName ,
//     birthDate: action.payload.birthDate,
//     email: action.payload.email,
//     mobileNumber: action.payload.mobileNumber,
//     insuranceCompany: action.payload.insuranceCompany,
//     insuranceNumber: action.payload.insuranceNumber,  
//    }
//   ]
// //save to userState
//         }
            
//             break;
    
//         default:
//             break;
//     }

// }


        




function MyProvider({children}) {
   
    const [userState, setUserState] = useState({})

 const userToken = localStorage.getItem("currentToken");
    // console.log(userToken);
    
    const getUser=()=>{
    axios
      .post("http://localhost:5000/patient/bookingForm", { userToken })
      .then((res) => {
        //    console.log(res.data);
        setUserState({
            userId: res.data.data._id,
            firstName: res.data.data.firstName,
            lastName:res.data.data.lastName ,
            birthDate: res.data.data.birthDate,
            email: res.data.data.email,
            mobileNumber:res.data.data.mobileNumber,
            insuranceCompany: res.data.data.insuranceCompany,
            insuranceNumber: res.data.data.insuranceNumber,
            bookedAppointments:res.data.data.bookedAppointments,
        })

   
    // console.log('userState is:',userState);
      });

    }

    return (
        <MyContext.Provider value={{userState, getUser}}>
        {children}           
        </MyContext.Provider>
    )
}

export default MyProvider
