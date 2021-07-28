import React from 'react'
// import image1 from '../../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg'
import { Link } from "react-router-dom";


function Home() {
    return (
<div className="widget-container">
<div clasName='header'>
this is the header

</div>
<Link to='./SetAppointmentTimes' className="widget calendar-widget"><div  >Set Availability</div> </Link>
<Link to='./appointmentlist' className="widget patient-list-widget"><div>Appointments </div></Link>
<Link to='./finddoctor' className="widget dr-list-widget"><div > Find Dr </div></Link>
<Link to='./todoList' className="widget todo-list-widget"><div>To Do List </div></Link>
<Link to='./weather' className="widget todo-list-widget"><div>weather </div></Link>




</div>
    )
}

export default Home
