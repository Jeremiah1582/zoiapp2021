import React {useState} from "react";

const PatientDashboard = () => {
  const handleChange = (e) => {
    [e.target.name] = e.target.value
  }
  const submit = () => {
    e.preventDefault()

  }
  return (
    <div>
      <h3>Patient Dashboard</h3>

      <div className= "search-form"></div>
      <form class="example" action="action_page.php">
  <input type="text" placeholder="Search.." name="search">
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
      </div>
    </div>
  );
};

export default PatientDashboard;
