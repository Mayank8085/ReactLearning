import React from "react";

import { FaTimes,FaPen, FaRegCircle } from "react-icons/fa";

const Icon=({name})=>{

    switch (name) {
        case "circle":
            return <FaRegCircle style={{fontSize: "40px"}}/>
        case "cross":
            return <FaTimes style={{fontSize: "40px"}}/>

    
        default:
            return <FaPen style={{fontSize: "40px"}}/>
            
            
    }

}

export default Icon;