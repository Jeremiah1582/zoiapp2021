import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Image } from "react-bootstrap";
// import '@syncfusion/ej2-react-calendars'
// import '../../../styling/customDashboard.scss'
function SetAppointmentTimes() {
  const [timeSlot, setTimeSlot] = useState([]);

  const [StateB, setStateB] = useState([]);

  // handle state func---------------------------------------------------------------
  const handleSetTimeSlot = (e) => {
    setTimeSlot({ ...timeSlot, [e.target.name]: e.target.value });
  };

  // console.log(timeSlot);

  // add time slot to the database-------------------------------------------------------
  const addTimeSlot = (e) => {
    const userToken = localStorage.getItem("currentToken");

    e.preventDefault();
    //    console.log(e.target[0].defaultValue , 'line 29');
    axios
      .post("http://localhost:5000/doctor/setAppointmentTime", {
        timeSlot,
        userToken,
      })
      .then((result) => {
        console.log(result);
        setStateB({ ...StateB, data: result.data });
      });
    // console.log(setStateB());
  };

  // delete timeslot from the database------------------------------------------------
  // const deleteTimeSlot = () => {};

  return (
    <div>
      <div className="set-appointment-container">
        {/* new form test */}

        <div className="set-time-form">
          <Form
            onSubmit={(e) => {
              addTimeSlot(e);
            }}
            className="form"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Time</Form.Label>
              <Form.Control
                name="time"
                type="time"
                value={timeSlot.time}
                onChange={(e) => {
                  handleSetTimeSlot(e);
                }}
                style={{fontSize:"20px"}}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                data-date-format="DD MMMM YYYY"
                name="date"
                type="date"
                value={timeSlot.date}
                onChange={(e) => {
                  handleSetTimeSlot(e);
                }}
                style={{fontSize:"20px"}}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                name="duration"
                type="number"
                value={timeSlot.duration}
                onChange={(e) => {
                  handleSetTimeSlot(e);
                }}
                placeholder="30 mins"
                style={{fontSize:"20px"}}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                textAlign: "center",
                width: "100px",
                height: "30px",
                fontSize: "18px",
                lineHeight: "14px",
                letterSpacing: "2px",
                borderRadius: "7px",
              }}
            >
              Add
            </Button>
          </Form>
        </div>
        {/* .map() available slots from data base here */}
        <div className="time-container"></div>
      </div>
    </div>

    // Dr SetAppointmentTimes View (approval appointments)
  );
}

export default SetAppointmentTimes;
