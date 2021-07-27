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

            <div className='widget-container2'>
{userDrState.bookedAppointments.map((appointment, index)=>{
    return(
        <div key={appointment._id} id={appointment._id} >      
            <Card className='app-list-cards' style={{ width: '18rem'}}>

            <Card.Body>{console.log(appointment)}
            <div className='app-list-card-title'>
                <Card.Title style={{textAlign:"center"}}> Patient: 
                <br/><br/>
                
                {appointment.firstName} {appointment.lastName}</Card.Title>
            </div><br />
            <div className='app-list-card-body'>
                <Card.Subtitle className="mb-2 text-muted">date:{appointment.date}</Card.Subtitle>
                <Card.Text>
                <h4>Time: {appointment.time}</h4> <br/>
                {appointment.duration?<h4>Duration: {appointment.duration} mins </h4>:null}  <br/>
                {/* <h7>{appointment.address}</h7> <br/> */}
                {/* <h7>{appointment.DrName}</h7> <br/> */}
                </Card.Text>
            </div>
            <div lassName='app-list-card-footer'>
           
                <Button className='app-card-buttons'>Delete</Button>
                <Button className='app-card-buttons'>Update</Button>

             </div>
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
