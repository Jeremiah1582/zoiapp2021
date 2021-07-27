import React, { useContext } from "react";
// import image1 from '../../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg'
import { Link } from "react-router-dom";
import { MyContext } from "../../../Context_APIs/userContextAPI";
import UserIcon from "../../../imgs/usericon.png";
import Items from "../../../imgs/items.jpg"

function Home() {
  const { userState, getUser } = useContext(MyContext);
  console.log(userState);

  return (
    // previous code
    // <div className="widget-container">
    //   <div className="widget user-info-widget">
    //     <h4>Hello {userState.firstName} </h4>
    //   <Link
    //     to="/patient/dashboard/messages"
    //     className="widget messenger-widget"
    //   >
    //     {/* <div>Messages</div> */}
    //     <h4>Messages</h4>
    //   </Link>
    //   <Link
    //     to="/patient/dashboard/appointmentlist"
    //     className="widget patient-list-widget"
    //   >
    //     <h4>Appointments</h4>
    //   </Link>
    //   <Link
    //     to="/patient/dashboard/finddoctor"
    //     className="widget dr-list-widget"
    //   >
    //     <h4>Find Doctor </h4>
    //   </Link>
    //   <Link to="/patient/dashboard/weather" className="widget todo-list-widget">
    //     <h4>Weather </h4>
    //   </Link>
    //   </div>

    // </div>

    // test code ashik
    <div className="cardWrap">
      {/* <a href="/patient/finddoctor"> */}
      <div className="card">
        <div className="boxCard">
          <div className="contentCard user-icon">
            <img src={UserIcon} alt="user icon" className="imgCard " />
            <h4 className="user-title">Hello {userState.firstName} </h4>
            <hr />
            {/* user infos */}
            <div className="user-info">
              <div className="user-info-items">
                Account-Type : {userState.accountType}
              </div>

              <div className="user-info-items">
                First Name : {userState.firstName}
              </div>
              <div className="user-info-items">
                Last Name : {userState.lastName}
              </div>
              <div className="user-info-items">
                Birth Date : {userState.birthDate}
              </div>

              <div className="user-info-items">
                Insurance Nmr : {userState.insuranceNumber}
              </div>
              <div className="user-info-items">
                Insurance Company : {userState.insuranceCompany}
              </div>
              <div className="user-info-items">E-mail : {userState.email}</div>
              <div className="user-info-items">
                Mobile Nmr : {userState.mobileNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </a> */}

      {/* <a href="/aboutzoe"> */}
      <div className="card">
        <div className="boxCard">
          <div className="contentCard">
            <img 
              src={Items}
               alt="items" className="imgCard" />
            <h2>What do you need ?</h2>
          
          </div>
        </div>
      </div>
      {/* </a> */}

      {/* <a href="/user/login"> */}
      <div className="card">
        <div className="boxCard">
          <div className="contentCard">
            {/* <img src={appointment} alt="appointment" className="imgCard" /> */}
            <h2>Appointments</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              neque quo et provident labore, incidunt maxime alias. Consequuntur
              ipsum temporibus mollitia, quae placeat dolorum, eum odio illum,
              quos eius nemo?
            </p>
          </div>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
}

export default Home;
