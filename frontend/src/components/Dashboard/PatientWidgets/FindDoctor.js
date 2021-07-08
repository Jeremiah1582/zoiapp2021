import React, { useState } from "react";
import BookingModal from "../../ShowModals/BookingModal";
import axios from "axios";
import specialistAPI from "../../../Context_APIs/specialistFields";
import "../../../styling/customFindDoctor.css";
// import { Form, Button, Image } from "react-bootstrap";

function FindDoctor() {
  // const [searchInput, setSearchInput] = useState('');

  const [modalShow, setModalShow] = useState(false);

  const [formState, setFormState] = useState([
    // {field: ''}
  ]);
  const [doctorTable, setDoctorTable] = useState([]);

  //add new search query to formState-------------------------
  const handleChange = (e) => {
    // console.log(e, "line11 ")
    setFormState({ ...formState, [e.target.name]: e.target.value });
    // console.log(formState);
  };

  //Delete search Query from formState------------------------
  // const deleteField = (e) => {
  //   const index = e.target.id;
  //   console.log(index);
  //   const newFormState = [...formState];
  //   formState.splice(index, 1);
  //   setFormState({ ...formState, field: newFormState });
  // }

  // Send & receive from Back End---------------------------------------
  const submit = (e) => {
    e.preventDefault();
    // console.log(formState, "line 12");
    axios
      .post("http://localhost:5000/patient/finddoctor", formState)
      .then((res) => {
        // console.log(res, "line 25");
        setDoctorTable(res.data);
      });
  };
  // const handleSpecialistInput = (item) => {
  //   setSearchInput(item);
  //   console.log(searchInput);
  // };
  // booking button function
  // const booking=(e)=>{

  // }
  // send request to backend

  //receive data from backend

  return (
    <div>
      {/* search bar (search in database) */}

      <form name="form1" id="form1" action="" onSubmit={submit}>
        {" "}
        Specialist fields:
        <select name="field" id="subject" onChange={handleChange}>
          {specialistAPI.map((item, index) => {
            return (
              <option name="field" id={index} key={index} value={item.field}>
                {" "}
                {item.field}{" "}
              </option>
            );
          })}
        </select>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
        <br />
        <br />
      </form>
      {/* NOTE: below is where all the selected discliplines will be displayed */}
      <div>
        {/* {formState.map((item,index)=>{
    return(
      <div 
      id={index} 
      key={index} 
      className='search-selection'
      > 
      {item.field}
      </div>
    )
  })} */}
      </div>
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
                <td>
                  <button type="button" className="booking-button">
                    Book an Appointment
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

{/* Show/ Hidden Modal  */}
      <BookingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default FindDoctor;
