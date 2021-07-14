import React, {useReducer, createContext, useEffect} from 'react'

//reducer---------------------------------------------------


const reducer=(userState, action)=>{
    switch(action.type){
        case  'GETUSER':{
//call axios 
const userToken = localStorage.getItem("currentToken");
    console.log(userToken);
    axios
      .post("http://localhost:5000/patient/bookingForm", { userToken })
      .then((res) => {
        console.log(res.data, 'reducer line 15 context_api');
      });

//save to userState
        }
            
            break;
    
        default:
            break;
    }

}

export const MyContext= createContext()

function MyProvider({children}) {
    const [userState, dispatch] = useReducer(reducer,{
        firstName:,
        lastName: ,
        birthDate:,
        email:,
        mobileNumber:,
        insuranceCompany:,
        insuranceNumber:,
    }, init)

    return (
        <MyContext.Provider value={[userState,dispatch]}>
        {children}           
        </MyContext.Provider>
    )
}

export default MyProvider
