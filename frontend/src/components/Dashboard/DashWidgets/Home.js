import React from 'react'
// import image1 from '../../../styling/images/operacion-retorno-mallorca-by-andres-nieto-porras.jpg'
import { Link } from "react-router-dom";


function Home() {
    return (
<div className="widget-container">

<Link to='./SetAppointmentTimes' className="widget calendar-widget"><div  >Set Availability</div> </Link>
<Link to='./messages' className="widget messenger-widget"><div >Messages</div></Link>
<Link to='./patientList' className="widget patient-list-widget"><div>Patient List </div></Link>
<Link to='./drList' className="widget dr-list-widget"><div >Dr. List </div></Link>
<Link to='./todoList' className="widget todo-list-widget"><div>To Do List </div></Link>
<Link to='./weather' className="widget todo-list-widget"><div>weather </div></Link>




</div>
    )
}

export default Home
