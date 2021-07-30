import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Modal, Form, Button, Image, Card, Table } from "react-bootstrap";
import specialistFields from "../../../Context_APIs/specialistFields";
import { MyContext } from "../../../Context_APIs/userContextAPI";

function FindDoctor() {
  const [formState, setFormState] = useState([]);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState(false);
  // Show Table State
  const [showTable, setShowTable] = useState(false);
  // Doctor Table State
  const [doctorTable, setDoctorTable] = useState([]);
  // Available Time Slots State
  const [availableTimesDisplay, setAvailableTimesDisplay] = useState([]);
  // The Modal Show State
  const [show, setShow] = useState(false);
  // Appointment Id State
  const [DrAppointmentId, setDrAppointmentId] = useState("");
  // Success Message State
  const [successModalShow, setSuccessModalShow] = useState(false);

  // const[patientInfo, setPatientInfo]=useState([])
  // ------------------------------------------------------
  const { userState, getUser } = useContext(MyContext);
  // console.log(userState, 'line 24');
  // ----------------------------------------------------------------

  const [newAppointment, setNewAppointment] = useState({
    firstName: "",
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
  });

  const sendRequest = (e) => {
    e.preventDefault();
    //sending appointment info
    const userToken = localStorage.getItem("currentToken");
    axios
      .post("http://localhost:5000/patient/bookedappointments", newAppointment)
      .then((result) => {
        console.log(result);
      });

    // send confirmation email
    //display success message
    setSuccessModalShow(true);
    // disappear the booking form
    setBookingForm(false);

    // disappear the Time Slots
    setAvailableTimesDisplay([]);
  };

  //add new search query to formState-------------------------
  const handleChange = (e) => {
    getUser();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  // console.log(bookingForm);

  const handleShow = (DrId, timeSlots, index) => {
    setShow(true);
    // console.log(timeSlots);
    setAvailableTimesDisplay(timeSlots);
    setDrAppointmentId(DrId);
    // setNewAppointment([...newAppointment])
    // console.log();
  };

  const backToSlot = () => {
    setBookingForm(false);
    setShow(true);
  };
  const scheduleAppointment = (timeDate) => {
    // console.log(timeDate);
    // console.log(timeDate._id);
    setNewAppointment({
      patientId: userState.userId,
      doctorId: DrAppointmentId,
      timeSlotId: timeDate._id,
      time: timeDate.time,
      date: timeDate.date,
      duration: timeDate.duration,
      firstName: userState.firstName,
      lastName: userState.lastName,
      birthDate: userState.birthDate,
      email: userState.email,
      mobileNumber: userState.mobileNumber,
      insuranceNumber: userState.insuranceNumber,
      insuranceCompany: userState.insuranceCompany,
      note: "",
    });

    setBookingForm(true); //the Dr's ID
  };

  const handleModalInfoChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };
  //
  // console.log(newAppointment);
  //Delete search Query from formState------------------------
  // const deleteField = (e) => {
  //   const index = e.target.id;
  //   console.log(index);
  //   const newFormState = [...formState];
  //   formState.splice(index, 1);
  //   setFormState({ ...formState, field: newFormState });
  // }

  // Send & receive from Back End---------------------------------------

  // useEffect(() => {
  //   const userToken = localStorage.getItem("currentToken");
  //   console.log(userToken);
  //   axios
  //     .post("http://localhost:5000/patient/bookingForm", { userToken })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }, [bookingForm]);

  const submit = (e) => {
    e.preventDefault();
    setShowTable(true);

    // console.log(formState, "line 12");
    axios
      .post("http://localhost:5000/patient/finddoctor", formState)
      .then((res) => {
        // console.log(res.data, "line 25");
        setDoctorTable(res.data);
      });
  };

  return (
    // previous code
    // <div className="page-container">
    //   {/* search bar (search in database) */}

    //   <form name="form1" id="form1" action="" onSubmit={submit}>
    //     {" "}
    //     Specialist Fields:
    //     <select name="field" id="subject" onChange={handleChange}>
    //       {specialistFields.map((item, index) => {
    //         return (
    //           <option name="field" id={index} key={index} value={item.field}>
    //             {" "}
    //             {item.field}{" "}
    //           </option>
    //         );
    //       })}
    //     </select>
    //     <Button type="submit">
    //       <i className="fa fa-search"></i>
    //       Search
    //     </Button>
    //     <br />
    //     <br />
    //   </form>
    //   {showTable ? (
    //     <Table className="doctor-list-table" striped bordered hover>
    //       <thead>
    //         <th>Doctor</th>
    //         <th>Address</th>
    //         <th>Email</th>
    //         <th>Specialist In</th>
    //         <th>Appointments</th>
    //       </thead>

    //       <tbody>
    //         {doctorTable.map((specialist, index) => {
    //           return (
    //             <tr>
    //               <td>
    //                 {specialist.firstName} {specialist.lastName}
    //               </td>
    //               <td>
    //                 {specialist.street}
    //                 {specialist.houseNr},{specialist.postalCode}
    //                 {specialist.city}
    //               </td>
    //               <td>{specialist.email}</td>
    //               <td>{specialist.specialistFields}</td>
    //               <td>
    //                 <Button
    //                   className="find-dr-modal"
    //                   variant="primary"
    //                   onClick={() => {
    //                     handleShow(
    //                       specialist._id,
    //                       specialist.availableTimeSlots,
    //                       index
    //                     );
    //                   }}
    //                 >
    //                   Book Now
    //                 </Button>
    //               </td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </Table>
    //   ) : null}

    //   {/* Show/ Hidden Modal  */}

    //   <Modal
    //     show={show}
    //     onHide={() => {
    //       setShow(false);
    //       setBookingForm(false);
    //       setSuccessModalShow(false);
    //     }}
    //     dialogClassName="modal-90w"
    //     aria-labelledby="example-custom-modal-styling-title"
    //   >
    //     <div>
    //       <Modal.Header closeButton>
    //         <h3> Book an Appointment</h3>
    //       </Modal.Header>
    //       {successModalShow ? (
    //         <Modal.Body>
    //           {/* Message to Patients */}
    //           <p>
    //             Your request has been successfully sended. <br />
    //             Please check your e-mail.Thank you.
    //           </p>
    //           <Button className="find-dr-modal" variant="primary">
    //             Back to Appointments List
    //           </Button>
    //         </Modal.Body>
    //       ) : null}

    //       {/* Displaying Booking form with condition */}
    //       {bookingForm ? (
    //         <Modal.Body>
    //           {/* <h3>Booking Form</h3> */}
    //           <div>
    //             <h4>
    //               Time: {newAppointment.time} <br /> Date: {newAppointment.date}{" "}
    //               <br /> Duration: {newAppointment.duration} mins
    //             </h4>
    //           </div>
    //           {/* Back Button */}
    //           <Button
    //             className="find-dr-modal"
    //             variant="primary"
    //             onClick={backToSlot}
    //           >
    //             Back
    //           </Button>

    //           {/* Form  */}
    //           <Form
    //             className="form-class form"
    //             onSubmit={(e) => sendRequest(e)}
    //           >
    //             {/* First Name */}
    //             <Form.Group
    //               className="input-field name d-flex align-items-center"
    //               controlId="formBasicFirstName"
    //             >
    //               <Form.Label>First Name:</Form.Label>
    //               <Form.Control
    //                 name="firstName"
    //                 type="text"
    //                 placeholder="First name"
    //                 onChange={(e) => handleModalInfoChange(e)}
    //                 defaultValue={userState.firstName}
    //                 value={newAppointment.firstName}
    //                 onChange={handleModalInfoChange}
    //               />
    //             </Form.Group>
    //             {/* Last Name */}
    //             <Form.Group
    //               className="input-field name d-flex align-items-center"
    //               controlId="formBasicLastName"
    //             >
    //               <Form.Label>Last Name:</Form.Label>
    //               <Form.Control
    //                 name="lastName"
    //                 type="text"
    //                 placeholder="Last name"
    //                 onChange={(e) => handleModalInfoChange(e)}
    //                 defaultValue={userState.lastName}
    //                 value={newAppointment.lastName}
    //               />
    //             </Form.Group>
    //             {/* Birth Date */}
    //             <Form.Group
    //               className="input-field name d-flex align-items-center"
    //               controlId="formBasicBirthDate"
    //             >
    //               <Form.Label>Birth-Date:</Form.Label>
    //               <Form.Control
    //                 name="birthDate"
    //                 type="text"
    //                 placeholder="Enter birth date"
    //                 onChange={(e) => handleModalInfoChange(e)}
    //                 defaultValue={userState.birthDate}
    //                 value={newAppointment.birthDate}
    //               />
    //             </Form.Group>

    //             {/* email */}
    //             <Form.Group className="input-field" controlId="formBasicEmail">
    //               <Form.Label>Email address:</Form.Label>
    //               <Form.Control
    //                 name="email"
    //                 type="email"
    //                 placeholder="Enter email"
    //                 onChange={(e) => handleModalInfoChange(e)}
    //                 defaultValue={userState.email}
    //                 value={newAppointment.email}
    //               />
    //             </Form.Group>
    //             {/* Insurance Company Name */}
    //             <Form.Group
    //               className="input-field name"
    //               controlId="formBasicInsuranceCompany"
    //             >
    //               <Form.Label>Insurance Company:</Form.Label>
    //               <Form.Control
    //                 name="insuranceCompany"
    //                 type="text"
    //                 placeholder="Insurance company name"
    //                 onChange={(e) => handleModalInfoChange(e)}
    //                 defaultValue={userState.insuranceCompany}
    //                 value={newAppointment.insuranceCompany}
    //               />
    //             </Form.Group>
    //             {/* Insurance Number */}
    //             <Form.Group
    //               className="input-field"
    //               controlId="formBasicInsuranceNumber"
    //             >
    //               <Form.Label>Insurance Number:</Form.Label>
    //               <Form.Control
    //                 name="insuranceNumber"
    //                 type="text"
    //                 placeholder="Enter insurance number"
    //                 onChange={(e) => handleModalInfoChange(e)}
    //                 defaultValue={userState.insuranceNumber}
    //                 value={newAppointment.insuranceNumber}
    //               />
    //             </Form.Group>
    //             {/* Mobile Number */}
    //             <Form.Group
    //               className="input-field"
    //               controlId="formBasicMobileNumber"
    //             >
    //               <Form.Label>Mobile Number:</Form.Label>
    //               <Form.Control
    //                 name="mobileNumber"
    //                 type="text"
    //                 placeholder="Enter mobile number"
    //                 onChange={(e) => handleModalInfoChange(e)}
    //                 defaultValue={userState.mobileNumber}
    //                 value={newAppointment.mobileNumber}
    //               />
    //             </Form.Group>
    //             {/* Note from Patient */}
    //             <Form.Group
    //               className="mb-3 appointment-note-field"
    //               controlId="exampleForm.ControlTextarea1"
    //             >
    //               <Form.Label>Note:</Form.Label>
    //               <Form.Control
    //                 type="text"
    //                 name="note"
    //                 as="textarea"
    //                 rows="3"
    //                 onChange={(e) => handleModalInfoChange(e)}
    //                 value={newAppointment.note}
    //               />
    //             </Form.Group>
    //             {/* Send Request */}
    //             <Button type="submit">Send Request</Button>
    //           </Form>
    //         </Modal.Body>
    //       ) : (
    //         // Displaying Time Slots from Doctors
    //         <Modal.Body>
    //           {/* <h3>Select Time and Date</h3> */}
    //           {availableTimesDisplay.map((item, index) => {
    //             return (
    //               <div className="available-times">
    //                 <Button
    //                   type="btn"
    //                   key={index}
    //                   id={index}
    //                   onClick={() => {
    //                     scheduleAppointment(item);
    //                   }}
    //                 >
    //                   <h4>
    //                     Time: {item.time} <br /> Date: {item.date} <br />{" "}
    //                     Duration: {item.duration} mins
    //                   </h4>
    //                 </Button>
    //               </div>
    //             );
    //           })}
    //         </Modal.Body>
    //       )}
    //       <Modal.Footer></Modal.Footer>
    //     </div>
    //   </Modal>
    // </div>

    // Latest code from jeremiah

    <div className="find-doctor-container">
      {/* search bar (search in database) */}

      <form
        className="DrFindDoctor-form"
        name="form1"
        id="form1"
        action=""
        onSubmit={submit}
      >
        {" "}
        Specialist Field:
        <select
          className="drFindDr-input"
          name="field"
          id="subject"
          onChange={handleChange}
        >
          {specialistFields.map((item, index) => {
            return (
              <option name="field" id={index} key={index} value={item.field}>
                {" "}
                {item.field}{" "}
              </option>
            );
          })}
        </select>
        <br />
        <Button
          type="submit"
          className="reg-discipline"
          style={{
            textAlign: "center",
            width: "120px",
            height: "40px",
            fontSize: "16px",
            lineHeight: "7px",
            letterSpacing: "2px",
            borderRadius: "7px",
          }}
        >
          <i className="fa fa-search "></i>
          Search
        </Button>
        <br />
        <br />
      </form>
      {showTable ? (
        <div>
          {doctorTable.map((specialist, index) => {
            return (
              <div key={index}>
                <div className="findDr-result-card">
                  <h4>
                    <b>
                      {" "}
                      Doctor: {specialist.firstName} {specialist.lastName}
                    </b>
                  </h4>
                  <h4>
                    <p>Field: {specialist.specialistFields}</p>
                  </h4>
                  <h4>E-mail: {specialist.email} </h4>
                  <h4>Mobile : {specialist.mobile} </h4>
                  <h4>
                    {" "}
                    Address: {specialist.street}
                    {specialist.houseNr},{specialist.postalCode}
                    {specialist.city}
                  </h4>
                  <Button
                    className="find-dr-modal"
                    variant="primary"
                    onClick={() => {
                      handleShow(
                        specialist._id,
                        specialist.availableTimeSlots,
                        index
                      );
                    }}
                    style={{
                      textAlign: "center",
                      width: "110px",
                      height: "40px",
                      fontSize: "16px",
                      lineHeight: "7px",
                      letterSpacing: "1px",
                      borderRadius: "7px",
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      {/* Show/ Hidden Modal  */}

      <Modal
        size="lg"
        show={show}
        onHide={() => {
          setShow(false);
          setBookingForm(false);
          setSuccessModalShow(false);
          setDoctorTable([]);
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div className="">
          <Modal.Header closeButton>
            <h3 className="appointments-title"> Select an Appointment</h3>
          </Modal.Header>
          {successModalShow ? (
            <Modal.Body className="booked-app-thankYou-msg-modal">
              {/* Message to Patients */}

              <p>
                Your appointment has been successfully booked. <br />
                Please check your e-mail for confirmation.
              </p>
              <p>Thank you for booking with ZOE .</p>

              <a
                href="/patient/dashboard/appointmentlist"
                className="btn-primary "
                style={{
                  textAlign: "center",
                  width: "120px",
                  height: "80px",
                  fontSize: "20px",
                  // lineHeight: "8px",
                  letterSpacing: "2px",
                  borderRadius: "4px",
                  padding: "7px",
                }}
              >
                My Appointment Lists
              </a>
            </Modal.Body>
          ) : null}

          {/* Displaying Booking form with condition */}
          {bookingForm ? (
            <Modal.Body>
              {/* <h3>Booking Form</h3> */}
              <div>
                <h4>
                  Time: {newAppointment.time} <br /> Date: {newAppointment.date}{" "}
                  <br /> Duration: {newAppointment.duration} mins
                </h4>
              </div>
              {/* Back Button */}
              <Button
                className="find-dr-modal"
                variant="primary"
                onClick={backToSlot}
                style={{
                  textAlign: "center",
                  width: "120px",
                  height: "40px",
                  fontSize: "16px",
                  lineHeight: "7px",
                  letterSpacing: "2px",
                  borderRadius: "7px",
                }}
              >
                Back
              </Button>

              {/* Form  */}
              <Form
                className="form-class form"
                onSubmit={(e) => sendRequest(e)}
              >
                {/* First Name */}
                <Form.Group
                  className="input-field name d-flex align-items-center"
                  controlId="formBasicFirstName"
                >
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    onChange={(e) => handleModalInfoChange(e)}
                    defaultValue={userState.firstName}
                    value={newAppointment.firstName}
                    onChange={handleModalInfoChange}
                  />
                </Form.Group>
                {/* Last Name */}
                <Form.Group
                  className="input-field name d-flex align-items-center"
                  controlId="formBasicLastName"
                >
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => handleModalInfoChange(e)}
                    defaultValue={userState.lastName}
                    value={newAppointment.lastName}
                  />
                </Form.Group>
                {/* Birth Date */}
                <Form.Group
                  className="input-field name d-flex align-items-center"
                  controlId="formBasicBirthDate"
                >
                  <Form.Label>Birth-Date:</Form.Label>
                  <Form.Control
                    name="birthDate"
                    type="text"
                    placeholder="Enter birth date"
                    onChange={(e) => handleModalInfoChange(e)}
                    defaultValue={userState.birthDate}
                    value={newAppointment.birthDate}
                  />
                </Form.Group>

                {/* email */}
                <Form.Group className="input-field" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => handleModalInfoChange(e)}
                    defaultValue={userState.email}
                    value={newAppointment.email}
                  />
                </Form.Group>
                {/* Insurance Company Name */}
                <Form.Group
                  className="input-field name"
                  controlId="formBasicInsuranceCompany"
                >
                  <Form.Label>Insurance Company:</Form.Label>
                  <Form.Control
                    name="insuranceCompany"
                    type="text"
                    placeholder="Insurance company name"
                    onChange={(e) => handleModalInfoChange(e)}
                    defaultValue={userState.insuranceCompany}
                    value={newAppointment.insuranceCompany}
                  />
                </Form.Group>
                {/* Insurance Number */}
                <Form.Group
                  className="input-field"
                  controlId="formBasicInsuranceNumber"
                >
                  <Form.Label>Insurance Number:</Form.Label>
                  <Form.Control
                    name="insuranceNumber"
                    type="text"
                    placeholder="Enter insurance number"
                    onChange={(e) => handleModalInfoChange(e)}
                    defaultValue={userState.insuranceNumber}
                    value={newAppointment.insuranceNumber}
                  />
                </Form.Group>
                {/* Mobile Number */}
                <Form.Group
                  className="input-field"
                  controlId="formBasicMobileNumber"
                >
                  <Form.Label>Mobile Number:</Form.Label>
                  <Form.Control
                    name="mobileNumber"
                    type="text"
                    placeholder="Enter mobile number"
                    onChange={(e) => handleModalInfoChange(e)}
                    defaultValue={userState.mobileNumber}
                    value={newAppointment.mobileNumber}
                  />
                </Form.Group>
                {/* Note from Patient */}
                <Form.Group
                  className="mb-3 appointment-note-field"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Note:</Form.Label>
                  <Form.Control
                    type="text"
                    name="note"
                    as="textarea"
                    rows="3"
                    onChange={(e) => handleModalInfoChange(e)}
                    value={newAppointment.note}
                  />
                </Form.Group>
                {/* Send Request */}
                <Button
                  type="submit"
                  style={{
                    textAlign: "center",
                    width: "140px",
                    height: "40px",
                    fontSize: "16px",
                    lineHeight: "2px",
                    letterSpacing: "1px",
                    borderRadius: "7px",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          ) : (
            // Displaying Time Slots from Doctors

            <Modal.Body>
              <div className="findDr-time-slot-modal">
                {/* <h3>Select Time and Date</h3> */}
                {availableTimesDisplay.map((item, index) => {
                  return (
                    <div className="findDr-available-times">
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
              </div>
            </Modal.Body>
          )}
          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}
export default FindDoctor;
