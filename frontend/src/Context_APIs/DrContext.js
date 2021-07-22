import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'
export const MyDrContext= React.createContext()

function MyProvider({children}) {
   const initialState= {
            userId: "",
            firstName: "",
            lastName:"" ,
            birthDate: "",
            email: "",
            mobileNumber:"",
            insuranceCompany: "",
            insuranceNumber: "",
            bookedAppointments:[],
            availableTimeSlots:[]
   } 
   
    const [userDrState, setUserDrState] = useState(initialState)


console.log(userDrState);
    // console.log(userToken);
    // function  for Patient *********

    
// function for DR ******
    const getUserDr=()=>{
       const userToken = localStorage.getItem("currentToken");
     
    axios 
      .post("http://localhost:5000/doctor/bookingForm", { userToken })
      .then((res) => {
           console.log(res.data);
        setUserDrState({
            condition: res.data.data.condition,
            userId: res.data.data._id,
            firstName: res.data.data.firstName,
            lastName:res.data.data.lastName ,
            birthDate: res.data.data.birthDate,
            email: res.data.data.email,
            mobileNumber:res.data.data.mobileNumber,
            insuranceCompany: res.data.data.insuranceCompany,
            insuranceNumber: res.data.data.insuranceNumber,
            bookedAppointments:res.data.data.bookedAppointments,
            availableTimeSlots:res.data.data.availableTimeSlots
        })

   
    console.log('userDrState is:',userDrState);
      });

    }

    return (
        <MyDrContext.Provider value={{userDrState, getUserDr}}>
        {children}           
        </MyDrContext.Provider>
    )
}

export default MyProvider