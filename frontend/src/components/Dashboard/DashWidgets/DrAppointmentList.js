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
   const [modalNote, setModalNote] = useState(
     {note: 'hello there'}
     );

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    console.log(e.target.element, 'line 23');
    setShow(true);
    const modalMessage = e.target.value;
    // modalMessage.stringify;
    setModalNote({note:modalMessage})
    };

  return (
    <div>
      <h3 className='appointments-title'>Appointments</h3>
      <div className="widget-container appointment-container">
        {userDrState.bookedAppointments.map((appointment, index) => {
          return (
            <div key={appointment._id} id={appointment._id} className='app-list-cards'>
              <Card className="" style={{ width: "18rem" }}>
              <div className='appointment-card-header'>
                <Card.Title className='appointments-title'> <h5 ><u>Patient:</u> </h5> <h2>{appointment.firstName} {appointment.lastName}</h2>
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
                    <div className="appointment-body-part1" value={appointment.note} onClick={(e)=>{handleShow(e)}}
                    >
                    <p placeHolder='note section'>{appointment.note}</p>
                

                    </div>
                    {/* PART 2 */}
                    <div className="appointment-body-part2">
                     <u>Date:</u> <h4>{appointment.date}</h4>
                     <u>Time:</u><h4> {appointment.time}</h4>
                    {appointment?  <div><u>Duration:</u> <h4>{appointment.duration} mins</h4></div> : null}
                    
                    <Button className="app-card-buttons">Cancel</Button>
                    </div>
                  <Card.Text>
                   
                    
                     
                  </Card.Text>
                 
                  
                </Card.Body>
              </Card>

              
            </div>
          );
        })}
      </div>
      <div>
       <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Patient Note:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  {modalNote.note}
                  There is an issue with the Modal, React can't access the value of this div
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                 
                  </Modal.Footer>
                </Modal>
            </div>
    </div>
  );
}

export default DrAppointmentList;
