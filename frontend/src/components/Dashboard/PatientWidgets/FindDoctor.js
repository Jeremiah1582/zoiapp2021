import React, { useState } from "react";
import axios from "axios";
import specialistAPI from "../../../Context_APIs/specialistFields";
// import "../../../styling/customFindDoctor.css";
import { Modal, Form, Button, Image, Table } from "react-bootstrap";
import specialistFields from "../../../Context_APIs/specialistFields";

function FindDoctor() {
  // const [searchInput, setSearchInput] = useState('');

  const [modalShow, setModalShow] = useState(false);

  const [formState, setFormState] = useState([]);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState(false);

  const [doctorTable, setDoctorTable] = useState([]);
  const [availableTimesDisplay, setAvailableTimesDisplay] = useState([]);
  const [show, setShow] = useState(false);
  //add new search query to formState-------------------------
  const handleChange = (e) => {
    // console.log(e, "line11 ")
    setFormState({ ...formState, [e.target.name]: e.target.value });
    // console.log(formState);
  };

  const handleShow = (timeSlots, index) => {
    setShow(true);
    console.log(timeSlots);
    setAvailableTimesDisplay(timeSlots);
    console.log(availableTimesDisplay);
  };

  const scheduleAppointment = (timeDate) => {
    // console.log(timeDate);
    console.log(timeDate._id);
    setBookingForm(true); //the Dr's ID
  };
  //

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
        <Button type="submit">
          <i className="fa fa-search">Search</i>
        </Button>
        <br />
        <br />
      </form>

      <Table className="doctor-list-table" striped bordered hover>
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
                  <Button
                    className="find-dr-modal"
                    variant="primary"
                    onClick={() => {
                      handleShow(specialist.availableTimeSlots, index);
                    }}
                  >
                    book appointment
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* Show/ Hidden Modal  */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div>
          <Modal.Header closeButton>
            {/* <Modal.Title> Select an Appointment Time</Modal.Title> */}
          </Modal.Header>
          {bookingForm ? (
            <Modal.Body>
              <h3>Booking Form</h3>
              {/* Form  */}
            </Modal.Body>
          ) : (
            <Modal.Body>
              <h3>Select an Appointment Time</h3>
              {availableTimesDisplay.map((item, index) => {
                return (
                  <div className="available-times">
                    <Button
                      type="btn"
                      key={index}
                      id={index}
                      onClick={() => {
                        scheduleAppointment(item);
                      }}
                    >
                      <h4>
                        Time: {item.time} <br /> Date: {item.date} <br />{" "}
                        Duration: {item.duration} mins
                      </h4>
                    </Button>
                  </div>
                );
              })}
            </Modal.Body>
          )}
          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}
export default FindDoctor;
