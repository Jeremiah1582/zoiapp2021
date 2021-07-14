import React, {useReducer, createContext} from 'react'

//reducer---------------------------------------------------
const reducer=(state, action)=>{
    switch(action.type){
        case  'GETUSER':{
//call axios 
//save to state
        }
            
            break;
    
        default:
            break;
    }

}

export const MyContext= createContext()

function MyProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState, init)

    return (
        <MyContext.Provider value={[state,dispatch]}>
        {children}           
        </MyContext.Provider>
    )
}

export default MyProvider
