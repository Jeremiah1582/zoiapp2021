import React, {useState , useContext, useEffect}from 'react'
import {Card, Button, Modal} from 'react-bootstrap'
import {MyContext} from '../../../Context_APIs/userContextAPI'

function AppointmentList() {
const { userState, getUser} = useContext(MyContext)
const [smShow, setSmShow] = useState(false);
console.log(userState);

// getUser()
// const {bookedAppointments} = userDrState
// const getUserDetails=()=>{
 
    // console.log(userDrState);

    // }
//    console.log(bookedAppointments);

    


    return (
        <div>
            <h3>Appointments </h3>
            <div className='widget-container'>
{userState.bookedAppointments.map((appointment, index)=>{
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
    
    <Button className='app-card-buttons'onClick={() => setSmShow(true)}>Cancel</Button>{' '}
    <Button className='app-card-buttons'>Update</Button>
  </Card.Body>
</Card>
</div>
    )
   })}


   <Modal show={smShow} onHide={() => setSmShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      
      {/* <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
  <Modal.Header closeButton>
    <Modal.Title> How to Cancel you Appointment </Modal.Title>
  </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>

            <Card.Title>
           
            </Card.Title>
            <Card.Text>
            
        </Card.Text>
        </Card.Body>
        </Card>
        </Modal.Body>
      </Modal> */}
    
    
  

   </div>


         
        </div>
    )
}

export default AppointmentList
