import React from "react";
// import image1 from '../../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg'
import { Link } from "react-router-dom";
// import {}from

function Home() {
  
  return (
    <div className="widget-container">
      <Link
        to="/patient/dashboard/messages"
        className="widget messenger-widget"
      >
        <div>Messages (0)</div>
      </Link>
      <Link
        to="/patient/dashboard/appointmentlist"
        className="widget patient-list-widget"
      >
        <div>Appointments (13) </div>
      </Link>
      <Link
        to="/patient/dashboard/finddoctor"
        className="widget dr-list-widget"
      >
        <div>Find Doctor </div>
      </Link>
      <Link to="/patient/dashboard/weather" className="widget todo-list-widget">
        <div>weather </div>
      </Link>
    </div>
  );
}

export default Home;
