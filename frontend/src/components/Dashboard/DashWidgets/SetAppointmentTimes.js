import React, { useState, useEffect } from "react";
import axios from "axios";
// import '@syncfusion/ej2-react-calendars'
// import '../../../styling/customDashboard.scss'
function SetAppointmentTimes() {
  const [timeSlot, setTimeSlot] = useState([]);

  const [StateB, setStateB] = useState([]);

  // handle state func---------------------------------------------------------------
  const handleSetTimeSlot = (e) => {
    setTimeSlot({ ...timeSlot, [e.target.name]: e.target.value });
  };

  console.log(timeSlot);

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
    console.log(setStateB());
  };

  // delete timeslot from the database------------------------------------------------
  const deleteTimeSlot = () => {};

  return (
    // Patient SetAppointmentTimes View (appointment booking system)
    <div>
      <h1>SetAppointmentTimes</h1>
      {/* set availability here */}
      <div className="set-time-slot">
        <form
          onSubmit={(e) => {
            addTimeSlot(e);
          }}
          action=""
        >
          <label htmlFor="time">Time</label>
          <input
            name="time"
            type="time"
            value={timeSlot.time}
            onChange={(e) => {
              handleSetTimeSlot(e);
            }}
          />
          <input
            name="date"
            type="date"
            value={timeSlot.date}
            onChange={(e) => {
              handleSetTimeSlot(e);
            }}
          />
          <input
            name="duration"
            type="number"
            value={timeSlot.duration}
            onChange={(e) => {
              handleSetTimeSlot(e);
            }}
            placeholder="30 mins"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      {/* .map() available slots from data base here */}
      <div className="time-container"></div>
    </div>
    // Dr SetAppointmentTimes View (approval appointments)
  );
}

export default SetAppointmentTimes;
