import React,{useState} from "react"

import ContextPackage from "./context"

const Provider =(props)=>{
    const [Mission, setMission] = useState({
        mname: "GO TO RUSSIA",
        agent: "007",
        accept: "not accepted"
    }
    )
    return(
       <ContextPackage.Provider value={{
           data:Mission,
           IsAccept:()=>{
               setMission({...Mission, accept:"ACCEPTED"})

           }
       }}>
       {props.children}
       
       </ContextPackage.Provider>

    )
}

export default Provider;
