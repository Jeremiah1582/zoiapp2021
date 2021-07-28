import React, { useContext } from "react";
// import image1 from '../../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg'
import { Link } from "react-router-dom";
import { MyContext } from "../../../Context_APIs/userContextAPI";
import UserIcon from "../../../imgs/usericon.png";
import specialistAPI from "../../../Context_APIs/specialistFields";

function Home() {
  const { userDrState, setUserDrState } = useContext(MyContext);

  return (
    //previous code
    // <div className="widget-container">
    //   <Link to="./SetAppointmentTimes" className="widget calendar-widget">
    //     <div>Set Availability</div>{" "}
    //   </Link>
    //   <Link to="./appointmentlist" className="widget patient-list-widget">
    //     <div>Appointments </div>
    //   </Link>
    //   <Link to="./finddoctor" className="widget dr-list-widget">
    //     <div> Find Dr </div>
    //   </Link>
    //   <Link to="./todoList" className="widget todo-list-widget">
    //     <div>To Do List </div>
    //   </Link>
    //   <Link to="./weather" className="widget todo-list-widget">
    //     <div>weather </div>
    //   </Link>
    // </div>

    // new code 28.11

    <div className="cardWrap">
      <div className="card">
        <div
          className="boxCard "
          style={{ background: "rgba(52, 173, 133, 0.795)", opacity: "0.9" }}
        >
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
        <div
          className="boxCard"
          style={{ background: "rgba(52, 173, 133, 0.795)", opacity: "0.9" }}
        >
          <div className="contentCard">
            {/* <img src={Items} alt="items" className="imgCard" /> */}
            <h4 className="user-title">What do you need ?</h4>
            <hr />

            {/* parent div start */}
            <div className="widget-container"
            >
              {/* child divs start */}
              <div className="widget set-appointment-widget"
              
              >
                <Link to="/doctor/dashboard/SetAppointmentTimes">
                  <div className="widget-title">Set Times</div>
                </Link>
              </div>
              <div className="widget dr-list-widget">
                <Link to="/doctor/dashboard/finddoctor">
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
        <div
          className="boxCard"
          style={{ background: "rgba(52, 173, 133, 0.795)", opacity: "0.9" }}
        >
          <div className="contentCard ">
            {/* <img src={staySafe} alt="appointment" className="imgCard" /> */}
            <h4 className="user-title">Extra</h4>
            <hr />
            <div className="specialist-infos">
              {/* <p>Hello</p> */}
              {/* {specialistAPI.map((item, index) => {
              return (
                <div key={index}>
                  <div className="specialist-info-items">
                    <h4>
                      {" "}
                      <b>{item.field} </b>{" "}
                    </h4>
                    <h4 style={{ lineHeight: "24px" }}>
                      {item.description}{" "}
                    </h4>
                  </div>
                </div>
              );
            })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
