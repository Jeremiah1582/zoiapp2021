import React, { useState } from "react";
import BookingModal from "../../ShowModals/BookingModal";
import axios from "axios";
// import specialistAPI from "../../../Context_APIs/specialistFields";
// import { Form, Button, Image } from "react-bootstrap";

function FindDoctor() {
  // const [searchInput, setSearchInput] = useState('');

  const [formState, setFormState] = useState({ field: "" });
  const [doctorTable, setDoctorTable] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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
  // const handleSpecialistInput = (item) => {
  //   setSearchInput(item);
  //   console.log(searchInput);
  // };
  // booking button function
  // const booking=(e)=>{

  // part to be done here !!!!!

  // }

  return (
    <div>
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

      {/* Jeremiah code  */}

      {/* <form name="form1" id="form1" action="" onSubmit={submit}> Specialist fields:
    <select name="SpecialistFields" id="subject">
      {specialistAPI.map((item,index)=>{ 
        return(
          <div>
        <option id={index} onChange={()=>{handleSpecialistInput}}> {item.field} </option>
          </div> 
        )
      })}
    </select>
    <button type="submit">
          <i className="fa fa-search"></i>
        </button>
    <br/><br/>
  </form>

      <div className="dr-list">
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
      
      </div>*/}
      {/* Show/ Hidden  Modal  */}
      <BookingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default FindDoctor;
