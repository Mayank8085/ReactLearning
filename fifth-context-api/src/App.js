import React,  {Fragment} from "react" 

import Provider from "./Provider"

import Context from "./context"

const Agents=()=>{
    return <AgentOne/>
}
const AgentOne=()=>{
    return <AgentTwo/>
}
const AgentTwo=()=>{
    return <AgentBond/>
}

const AgentBond=()=>{
    return(
        <Context.Consumer>{
            (context)=>(
                <div>
                <h3>Agent  Information</h3>
                <p>Agent name: {context.data.mname}</p>
                <h3> Mission Status :{context.data.accept}</h3>
                <button style={{color:"white", background:"grey", padding:"10px"}} onClick={context.IsAccept}>Choose to Accept</button>
    
                </div>

            )
        

        }
        </Context.Consumer>
    )
}

const App =()=>{
    return(
        <div>
        <h1>API </h1>
        <Provider>
        <Agents/>
        </Provider>
        </div>
    )
}

export default App;