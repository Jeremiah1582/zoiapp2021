import React, { useState } from "react";
import axios from "axios";
// import specialistAPI from "../../../Context_APIs/specialistFields";
// import { Form, Button, Image } from "react-bootstrap";

function FindDoctor() {
  // const [formState, setFormState] = useState('');
  const [formState, setFormState] = useState({ field: "" });
  const [doctorTable, setDoctorTable] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.value, "line08 ")
    setFormState({ field: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formState, "line 12");
    axios
      .post("http://localhost:5000/patient/finddoctor", formState)
      .then((res) => setDoctorTable(res.data));

  };

  // booking button function
  // const booking=(e)=>{
    // part to be done here !!!!!

  // }
  // send request to backend

  //receive data from backend

  return (
    <div>
      {/* search bar (search in database) */}
     
      <form class="example" onSubmit={submit}>
        <input
          type="text"
          placeholder="Cardiology, Anesthesiology, ..."
          name="search"
          onChange={handleChange}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
{/* <form name="form1" id="form1" action="" onSubmit={submit}> Specialist fields:
    <select name="SpecialistFields" id="subject">
      {specialistAPI.map((item,index)=>{ 
        return( 
        <option id={index} onChange={()=>{handleChange}}> {item.field} </option>
        )
      })}
    </select>
    <br/><br/>
  </form> */}
      {/* Specialist Field */}

      <table className="doctor-list-table">
        <thead>
          <th>Doctor</th>
          <th>Address</th>
          <th>Email</th>
          <th>Speciality</th>
          <th>Appointment</th>
        </thead>
        <tbody>
          {doctorTable.map((specialist, index) => {
            return (
              <tr>
                <td>
                  {specialist.firstName} {specialist.lastName}
                </td>
                <td>
                  {specialist.street}
                  {specialist.houseNr},{specialist.postalCode}
                  {specialist.city}
                </td>
                <td>{specialist.email}</td>
                <td>{specialist.specialistFields}</td>
                <td><button type="button" className="booking-button">Book an Appointment</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FindDoctor;
