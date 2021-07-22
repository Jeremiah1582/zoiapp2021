import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'
export const MyContext= React.createContext()

function MyProvider({children}) {

   const initialState= {
            userId: "12345",
            firstName: "bob",
            lastName:"jim " ,
            birthDate: '01.05.1991',
            email: "sgbfgn@wweb.com",
            mobileNumber:"",
            insuranceCompany: "",
            insuranceNumber: "",
            bookedAppointments:[{
_id:'60f69152671d645198fd2e51',
patientId:'60efdfc1ef4e5239c0d5f220',
doctorId:'60ebfdb9ceb65901789682c8',
timeSlotId:'60f68fed671d645198fd2e47',
time:"12:57",
date:"2021-07-23",
duration:`50`,
firstName:"bob",
lastName:"Brown",
birthDate:"Thu Apr 01 1993 02:00:00 GMT+0200 (Central European Summer Time)",
email:"test.com",
mobileNumber:7508826890,
insuranceNumber:123456789,
insuranceCompany:"tk",
note:"foot probs"
}],
            availableTimeSlots:[]
   } 
    const [userState, setUserState] = useState({})
    const [userDrState, setUserDrState] = useState(initialState)
    
//  useEffect(() => {
//  getUser()
// },[])
// console.log(userState, 'the patientState userContext');
    // function  for Patient *********
   

    const getUser=()=>{
       const userToken = localStorage.getItem("currentToken");
    axios
      .post("http://localhost:5000/patient/bookingForm", { userToken })
      .then((res) => {
           console.log(res.data,'useContext API');
       
        setUserState({
            // condition: res.data.data.condition,
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
     
        
      });

    }
    
// function for DR ******
    const getUserDr=()=>{
       const userToken = localStorage.getItem("currentToken");
    axios 
      .post("http://localhost:5000/doctor/bookingForm", { userToken })
      .then((res) => {
           console.log(res.data);
          
        setUserDrState({
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
        }
        )
        

   
    // console.log('userDrState is:',userDrState);
      });

    }

    return (
        <MyContext.Provider value={{userState,userDrState, getUser,getUserDr}}>
        {children}           
        </MyContext.Provider>
    )
}

export default MyProvider
