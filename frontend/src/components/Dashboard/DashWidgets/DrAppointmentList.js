import React, {useState, useContext, useEffect } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { MyContext } from "../../../Context_APIs/userContextAPI";

function DrAppointmentList() {
  const { userDrState, getUserDr } = useContext(MyContext);
  // console.log(userDrState);

  // getUser()
  // const {bookedAppointments} = userDrState
  // const getUserDetails=()=>{

  // console.log(userDrState);

  // }
  //    console.log(bookedAppointments);

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h3 className='appointments-title'>Appointments</h3>
      <div className="widget-container appointment-container">
        {userDrState.bookedAppointments.map((appointment, index) => {
          return (
            <div key={appointment._id} id={appointment._id} className='app-list-cards'>
              <Card className="" style={{ width: "18rem" }}>
              <div className='appointment-card-header'>
                <Card.Title className='appointments-title'> <h5 ><u>Patient:</u> </h5> {appointment.firstName} {appointment.lastName}
                </Card.Title>
                 <Card.Subtitle className="mb-2 subtitle-text"> 
                   <u>Date:</u> <h4>{appointment.date}</h4> 
                    <u>insurance number:</u> {appointment.insuranceNumber}
                 </Card.Subtitle>
                
              </div>    
              <Card.Body className='appointment-card-body'>
                  {console.log(appointment)}
                 <br />
                 {/* PART 1 */}
                    <div className="appointment-body-part1" value={appointment} onClick={()=>{handleShow()}}
                    >
                    <p placeHolder='note section'>{appointment.note}</p>
                

                    </div>
                    {/* PART 2 */}
                    <div className="appointment-body-part2">
                     <u>Date:</u> <h4>{appointment.date}</h4>
                     <u>Time:</u><h4> {appointment.time}</h4>
                    {appointment?  <div><u>Duration:</u> <h4>{appointment.duration} mins</h4></div> : null}
                    <Button className="app-card-buttons">Update</Button>
                    <Button className="app-card-buttons">Delete</Button>
                    </div>
                  <Card.Text>
                   
                    
                     
                  </Card.Text>
                 
                  
                </Card.Body>
              </Card>

              
            </div>
          );
        })}
      </div>
       <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body></Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
    </div>
  );
}

export default DrAppointmentList;
