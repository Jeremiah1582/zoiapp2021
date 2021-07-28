import React, { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
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

  return (
    <div>
      <h3>Appointments</h3>
      <div className="appointment-list-container">
        {userDrState.bookedAppointments.map((appointment, index) => {
          return (
            <div key={appointment._id} id={appointment._id} className='cardwrap'>
              <Card className="app-list-cards" style={{ width: "18rem" }}>
                <Card.Body>
                  {console.log(appointment)}
                  <Card.Title>Patient: {appointment.firstName} {appointment.lastName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    insurance number: {appointment.insuranceNumber} <br/>
                    date:{appointment.date}
                  </Card.Subtitle>
                  <Card.Text>
                    <h4>{appointment.time}</h4> <br />
                    {appointment? <h4>{appointment.duration} mins</h4>: null} <br />
                    {/* <h6>{appointment.address}</h6> <br/> */}
                    {/* <h7>{appointment.DrName}</h7> <br/> */}
                  </Card.Text>
                  <Button className="app-card-buttons">Delete</Button>
                  <Button className="app-card-buttons">Update</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DrAppointmentList;
