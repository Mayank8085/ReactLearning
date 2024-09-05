import React,{useContext  } from "react";

import ThemeContext from "../Context/ThemeContext"
import Apptheme from "../Colors"

const HeroSection=()=>{
    const theme =useContext(ThemeContext)[0];
    const currentTheme= Apptheme[theme]

    return(
        <div style={{
            padding:"1 rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:"center"
        }}>
            <h1>
                Context API theme Toggler
            </h1>
            <p>This is a nice paragraph</p>
            <button style={{backgroundColor:"#26ae60",
        padding: "10px 15px",
        fontSize: "20px",
        color:"#fff",
        border:`${currentTheme.border}`
        }}>Click Me</button>
        </div>
    )

}

export default HeroSection