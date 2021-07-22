import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'
export const MyContext= React.createContext()

function MyProvider({children}) {
   
    const [userState, setUserState] = useState({})


    // console.log(userToken);
    
    const getUser=()=>{
       const userToken = localStorage.getItem("currentToken");
    axios
      .post("http://localhost:5000/doctor/bookingForm", { userToken })
      .then((res) => {
           console.log(res);
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
            availableTimeSlots:res.data.data.availableTimeSlots
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
