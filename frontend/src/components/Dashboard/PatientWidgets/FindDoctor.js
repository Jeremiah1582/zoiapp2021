import React, {useState} from "react";
// import { Form, Button, Image } from "react-bootstrap";
import specialistAPI from "../../../Context_APIs/specialistFields";

function FindDoctor() {
  //handle input from search
  const [searchInput, setSearchInput] = useState('');
  // const { specialistFields } = searchInput;


  const handleSpecialistInput = (item) => {
    setSearchInput(item);
    console.log(SearchInput);
  };

//   const deleteField = (e) => {
//     const index = e.target.id;
//     console.log(index);
//     const newSpecialistFields = [...specialistFields];
//     newSpecialistFields.splice(index, 1);
//     setSearchInput({ ...SearchInput, specialistFields: newSpecialistFields });
//   };
// send request to backend
const sendToBackEnd=(e)=>{
  e.preventdefault()
  axios
}
//receive data from backend

  return (
    <div>
      {/* search bar (search in database) */}
  <form name="form1" id="form1" action="" onSubmit={submit}> Specialist fields:
    <select name="SpecialistFields" id="subject">
      {specialistAPI.map((item,index)=>{ 
        return( 
        <option id={index} onChange={()=>{handleChange}}> {item.field} </option>
        )
      })}
    </select>
    <br/><br/>
  </form>

      {/* Map Dr List results Below */}
      <div className="dr-list">
        {/* display the name  */}
        {/* display the address */}
        {/* display the available appointment times */}
        {/* display the speciality*/}
      </div>
    </div>
  );
}
export default FindDoctor;







  {/* <div className="col-md-12">
       <Form.Group
          controlId="exampleForm.ControlSelect1 "
          className="input-field d-flex align-items-center"
        >
          <Form.Label>Select Specialist Field</Form.Label>
          <Form.Control
            class="input-field col-md-12"
            name="specialistFields"
            as="select"
            type="text"
            onChange={(e) => {
              console.log("onSelect is", e.target.value);
              const selectedItem = e.target.value;
              handleSpecialistInput(selectedItem);
            }}
          >
            {specialistAPI.map((item, index) => {
              return (
                <option key={index} value={item.field}>
                  {item.field}
                </option>
              );
            })}
          </Form.Control>
 
 
          <div className="discipline-container col-md-12">
            {searchInput.specialistFields.map((item, index) => {
              return (
                <div
                  id={index}
                  key={index}
                  className="reg-discipline" //create CSS in Index.css
                  onClick={(e) => {
                    deleteField(e);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </Form.Group>
      </div> */}