import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const MyContext = React.createContext();

function MyProvider({ children }) {
  const initialState = {
    userId: "",
    firstName: "",
    lastName: " ",
    birthDate: "",
    email: "",
    mobileNumber: "",
    insuranceCompany: "",
    insuranceNumber: "",
    bookedAppointments: [
      {
        _id: "",
        patientId: "",
        doctorId: "",
        timeSlotId: "",
        time: "",
        date: "",
        duration: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        mobileNumber: "",
        insuranceNumber: "",
        insuranceCompany: "",
        note: "",
      },
    ],
    availableTimeSlots: [],
  };
  const [userState, setUserState] = useState({});
  const [userDrState, setUserDrState] = useState(initialState);

  //  useEffect(() => {
  //  getUser()
  // },[])
  // console.log(userState, 'the patientState userContext');
  // function  for Patient *********

  const getUser = () => {
    const userToken = localStorage.getItem("currentToken");
    axios
      .post("http://localhost:5000/patient/bookingForm", { userToken })
      .then((res) => {
        // console.log(res.data, "useContext API");

        setUserState({
          userId: res.data.data._id,
          accountType: res.data.data.accountType,
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          birthDate: res.data.data.birthDate,
          email: res.data.data.email,
          mobileNumber: res.data.data.mobileNumber,
          insuranceCompany: res.data.data.insuranceCompany,
          insuranceNumber: res.data.data.insuranceNumber,
          bookedAppointments: res.data.data.bookedAppointments,
        });
      });
  };

  // function for DR ******
  const getUserDr = () => {
    const userToken = localStorage.getItem("currentToken");
    axios
      .post("http://localhost:5000/doctor/bookingForm", { userToken })
      .then((res) => {
        console.log(res.data);

        setUserDrState({
          userId: res.data.data._id,
          accountType: res.data.data.accountType,
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          birthDate: res.data.data.birthDate,
          email: res.data.data.email,
          mobileNumber: res.data.data.mobileNumber,
          insuranceCompany: res.data.data.insuranceCompany,
          insuranceNumber: res.data.data.insuranceNumber,
          bookedAppointments: res.data.data.bookedAppointments,
          availableTimeSlots: res.data.data.availableTimeSlots,
          licenceNumber: res.data.data.licenceNumber,
        });

        // console.log('userDrState is:',userDrState);
      });
  };

  return (
    <MyContext.Provider value={{ userState, userDrState, getUser, getUserDr }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
