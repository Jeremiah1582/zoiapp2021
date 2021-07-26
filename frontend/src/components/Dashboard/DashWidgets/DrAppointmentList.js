import React, {useContext, useEffect}from 'react'
import {Card, Button} from 'react-bootstrap'
import {MyContext} from '../../../Context_APIs/userContextAPI'

function DrAppointmentList() {
const { userDrState, getUserDr} = useContext(MyContext)
console.log(userDrState);

// getUser()
// const {bookedAppointments} = userDrState
// const getUserDetails=()=>{
 
    // console.log(userDrState);

    // }
//    console.log(bookedAppointments);

  
    return (
        <div>
            <h3>Appointments</h3>
            <div className='appointment-list-container'>
{userDrState.bookedAppointments.map((appointment, index)=>{
    return(
        <div key={appointment._id} id={appointment._id} >      
            <Card className='app-list-cards' style={{ width: '18rem'}}>
            <Card.Body>{console.log(appointment)}
                <Card.Title>Your Upcoming Appointment</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">date:{appointment.date}</Card.Subtitle>
                <Card.Text>
                <h6>{appointment.time}</h6> <br/>
                <h7>{appointment.duration}</h7> <br/>
                {/* <h7>{appointment.address}</h7> <br/> */}
                {/* <h7>{appointment.DrName}</h7> <br/> */}
                </Card.Text>
                <Button className='app-card-buttons'>Delete</Button>
                <Button className='app-card-buttons'>Update</Button>
            </Card.Body>
            </Card>
            </div>
    )
   })}


         
        </div>
        </div>
    )
}

export default DrAppointmentList
