import React from 'react'

function FindDr() {
    const [formState, setFormState] = useState()
    const handleChange = (e) => {
      [e.target.name] = e.target.value
    }
    const submit = () => {
      e.preventDefault();
  
    }
    // send request to backend 

    //receive data from backend
    
    return (
        <div>
        {/* search bar (search in database) */}
        <form class="example" >
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>


         {/* Map Dr List results Below */}
         <div className="dr-list">
         {/* display the name  */}
         {/* display the address */}
         {/* display the available appointment times */}
         {/* display the speciality*/}
         </div>
            
        </div>
    )
}

export default FindDr
