import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import '@syncfusion/ej2-react-calendars'
// import '../../../styling/customDashboard.scss'
function SetAppointmentTimes() {
   const [timeSlot, setTimeSlot]=useState([
       {
        time: '',
        date: '',
        duration: 30*60 
       }
   ])

   const [timeSlotList, setTimeSlotList] = useState([])

   useEffect(() => {
       const formState =  timeSlot
      axios.post('http://localhost:5000/setAppointmentTime', formState)
      .then((result)=>{
          console.log(result);
          setTimeSlotList(result.data)

      })
   }, [addTimeSlot])
// handle state func---------------------------------------------------------------
   const handleSetTimeSlot=(e)=>{
    setTimeSlot({...timeSlot,[e.target.name]: e.target.value})
   }

console.log(timeSlot, ' line 16 ');

// add time slot to the database-------------------------------------------------------
   const addTimeSlot=(e)=>{
    e.preventDefault()
   console.log(e.target.value, e.target.type);
   


   }
// delete timeslot from the database------------------------------------------------
   const deleteTimeSlot=()=>{

   }    

return ( 
        // Patient SetAppointmentTimes View (appointment booking system)
        <div>
            <h1>SetAppointmentTimes</h1>
 {/* set availability here */}
<div className="set-time-slot">
<form onSubmit={addTimeSlot()} action="">
    <input name='time' type="time" value={timeSlot.time} onChange={(e)=>{handleSetTimeSlot(e)}} />
    <input name='date' type="date" value={timeSlot.date} onChange={(e)=>{handleSetTimeSlot(e)}} />
    <button type='submit'>
    </button>
</form>
</div>
 {/* .map() available slots from data base here */}
<div className="time-container">


</div>
        </div>
        // Dr SetAppointmentTimes View (approval appointments)
    )
}

export default SetAppointmentTimes
