import React, { useContext } from "react";
// import image1 from '../../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg'
import { Link } from "react-router-dom";
import { MyContext } from "../../../Context_APIs/userContextAPI";
import UserIcon from "../../../imgs/user2.png";
import staySafe from "../../../imgs/stay-safe.jpeg";
// import Items from "../../../imgs/items.jpg";
import specialistAPI from "../../../Context_APIs/specialistFields";

function Home() {
  const { userState, getUser } = useContext(MyContext);
  // console.log(userState);

  return (
    <div className="cardWrap">
      <div className="card dashboard">
        <div className="boxCard patient-cards">
          <div className="contentCard user-icon">
            <img src={UserIcon} alt="user icon" className="imgCard " />
            <div
              className="account-type"
              style={{
                marginTop: "1.2rem",
                background: "rgba(138, 196, 178, 0.548)",
                color: "#dff0e2",
                opacity: "1",
              }}
            >
              {userState.accountType}{" "}
            </div>
            <h4 className="user-title" style={{ marginBottom: "3rem auto" }}>
              Hello {userState.firstName}{" "}
            </h4>
            <hr />
            {/* user infos */}
            <div className="user-info">
              {/* <div className="user-info-items">
                Account-Type : {userState.accountType}
              </div> */}

              <div className="user-info-items patient-cards">
                First Name : {userState.firstName}
              </div>
              <div className="user-info-items patient-cards">
                Last Name : {userState.lastName}
              </div>
              {/* <div className="user-info-items">
                Birth Date : {userState.birthDate}
              </div> */}

              <div className="user-info-items patient-cards">
                Insurance Nmr : {userState.insuranceNumber}
              </div>
              {/* <div className="user-info-items">
                Insurance Company : {userState.insuranceCompany}
              </div> */}
              <div className="user-info-items patient-cards">
                E-mail : {userState.email}
              </div>
              <div className="user-info-items patient-cards">
                Mobile Nmr : {userState.mobileNumber}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="boxCard patient-cards">
          <div className="contentCard">
            {/* <img src={Items} alt="items" className="imgCard" /> */}
            <h4 className="user-title">What do you need ?</h4>
            <hr />

            {/* parent div start */}
            <div className="widget-container">
              {/* child divs start */}
              <div className="widget patient-cards dr-list-widget ">
                <Link to="/patient/dashboard/finddoctor">
                  <div className="widget-title ">Find a Doctor</div>
                </Link>
              </div>
              <div className="widget appointments-widget patient-cards">
                <Link to="/patient/dashboard/appointmentlist">
                  <div className="widget-title">Appointments</div>
                </Link>
              </div>
              <div className="widget messages-widget patient-cards">
                <Link to="/patient/dashboard/messages">
                  <div className="widget-title">Messages</div>
                </Link>
              </div>
              <div className="widget weather-widget patient-cards">
                <Link to="/patient/dashboard/weather">
                  <div className="widget-title">Weather</div>
                </Link>
              </div>
              <div className="widget todo-list-widget patient-cards">
                <Link to="/patient/dashboard/todolist">
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
        <div className="boxCard patient-cards">
          <div className="contentCard specialist-info">
            {/* <img src={staySafe} alt="appointment" className="imgCard" /> */}
            <h4 className="user-title">ZOE Specialists</h4>
            <hr />
            <div className="specialist-infos ">
              {/* <p>Hello</p> */}
              {specialistAPI.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="specialist-info-items patient-cards">
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
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
