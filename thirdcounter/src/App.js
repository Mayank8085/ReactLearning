import React, {useState} from "react";

import "./style.css";

const App=()=>{

    const [count, setCount]= useState(0);

    return(
        <div className="App">
        <header>
        <h1>Counter App using State</h1>
        </header>
            <h1>Current value of counter is {count}</h1>
            <button onClick={()=>{
                setCount(0)
            }}>Reset Counter</button>
            <button onClick={()=>count>9 ? "":
                setCount(count+1)
            }>Increase Counter</button>
            <button onClick={()=> count<=0 ?"":
                setCount(count-1)
            }>Decrease Counter </button>

        </div>
    )
};

export default App;