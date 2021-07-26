import React, { useContext } from "react";
// import image1 from '../../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg'
import { Link } from "react-router-dom";
import { MyContext } from "../../../Context_APIs/userContextAPI";

function Home() {
  const { userState, getUser } = useContext(MyContext);
  console.log(userState);

  return (
    <div className="widget-container">
      <div className="widget user-info-widget">
        <h4>Hello {userState.firstName} </h4>
      </div>
      <Link
        to="/patient/dashboard/messages"
        className="widget messenger-widget"
      >
        {/* <div>Messages</div> */}
        <h4>Messages</h4>
      </Link>
      <Link
        to="/patient/dashboard/appointmentlist"
        className="widget patient-list-widget"
      >
        <h4>Appointments</h4>
      </Link>
      <Link
        to="/patient/dashboard/finddoctor"
        className="widget dr-list-widget"
      >
        <h4>Find Doctor </h4>
      </Link>
      <Link to="/patient/dashboard/weather" className="widget todo-list-widget">
        <h4>Weather </h4>
      </Link>
    </div>
  );
}

export default Home;
