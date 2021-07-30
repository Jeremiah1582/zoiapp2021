import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import { MyContext } from "../../../Context_APIs/userContextAPI";
import UserIcon from "../../../imgs/usericon.png";
import SetAppointmentTimes from "./SetAppointmentTimes";
import DrFindDoctor from "./DrFindDoctor";
function Home(props) {
  const { userDrState, setUserDrState } = useContext(MyContext);
  //   console.log(userDrState.bookedAppointments);
  // show appointment form state
  const [showTimeForm, setShowTimeForm] = useState(false);
  const [showDrFindDoctor, setShowDrFindDoctor] = useState(false);
  return (
    <div className="cardWrap">
      <div className="card">
        <div className="boxCard doctor-cards ">
          <div className="contentCard user-icon">
            <img src={UserIcon} alt="user icon" className="imgCard " />
            <div className="account-type">{userDrState.accountType} </div>
            <h4 className="user-title">Hello {userDrState.firstName} </h4>
            <hr />
            {/* user infos */}
            <div className="user-info">
              {/* <div className="user-info-items">
              Account-Type : {userDrState.accountType}
            </div> */}

              <div className="user-info-items">
                First Name : {userDrState.firstName}
              </div>
              <div className="user-info-items">
                Last Name : {userDrState.lastName}
              </div>
              {/* <div className="user-info-items">
              Birth Date : {userDrState.birthDate}
            </div> */}

              <div className="user-info-items">
                Insurance Nmr : {userDrState.insuranceNumber}
              </div>
              {/* <div className="user-info-items">
              Insurance Company : {userDrState.insuranceCompany}
            </div> */}
              <div className="user-info-items">
                E-mail : {userDrState.email}
              </div>
              <div className="user-info-items">
                Mobile Nmr : {userDrState.mobileNumber}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="boxCard doctor-cards">
          <div className="contentCard">
            {/* <img src={Items} alt="items" className="imgCard" /> */}
            <h4 className="user-title">What do you need ?</h4>
            <hr />

            {/* parent div start */}
            <div className="widget-container">
              {/* child divs start */}
              <div className="widget set-appointment-widget">
                <Link
                  //   to="/doctor/dashboard/SetAppointmentTimes"
                  onClick={() => setShowTimeForm(true)}
                >
                  <div className="widget-title">Set Times</div>
                </Link>
              </div>
              <div className="widget dr-list-widget">
                <Link 
                // to="/doctor/dashboard/finddoctor"
                onClick={() => setShowDrFindDoctor(true)}
                >
                  <div className="widget-title">Find a Doctor</div>
                </Link>
              </div>
              <div className="widget appointments-widget">
                <Link to="/doctor/dashboard/appointmentlist">
                  <div className="widget-title">Appointments</div>
                </Link>
              </div>
              <div className="widget messages-widget">
                <Link to="/doctor/dashboard/messages">
                  <div className="widget-title">Messages</div>
                </Link>
              </div>
              <div className="widget weather-widget">
                <Link to="/doctor/dashboard/weather">
                  <div className="widget-title">Weather</div>
                </Link>
              </div>
              <div className="widget todo-list-widget">
                <Link to="/doctor/dashboard/todolist">
                  <div className="widget-title">To Do List</div>
                </Link>
              </div>
              {/* child div end up*/}
            </div>
            {/* parent div end up */}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="boxCard doctor-cards">
          <div className="contentCard specialist-info">
            {/* <img src={staySafe} alt="appointment" className="imgCard" /> */}
            <h4 className="user-title">My Patients</h4>
            <hr />
            <div className="specialist-infos">
              {/* <p>Hello</p> */}
              {userDrState.bookedAppointments.map((patient, index) => {
                return (
                  <div key={index}>
                    <div className="specialist-info-items">
                      <h4>
                        <b>
                          {" "}
                          {patient.firstName} {patient.lastName}
                        </b>
                      </h4>
                      <h4>E-mail: {patient.email} </h4>
                      <h4>Mobile : {patient.mobileNumber}</h4>
                      <h4>Problems: {patient.note}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Modal Part */}

      <div>
        {/* Set Time modal */}
        <Modal
          className="login-modal"
          size="lg"
          show={showTimeForm}
          onHide={() => setShowTimeForm(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <b> Set Appointment Time</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SetAppointmentTimes />
           
          </Modal.Body>
        </Modal>
      </div>
      {/* 2. Find doctor modal */}

      <div>
          <Modal
          className="DrFindDoctor-modal"
          size="lg"
          show={showDrFindDoctor}
          onHide={() => setShowDrFindDoctor(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <b> Find Doctor</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DrFindDoctor/>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
