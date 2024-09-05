import React,{useState} from "react"

import ThemeContext from './Context/ThemeContext'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'

function App() {
  const Themehook =useState("light")

  return (
  <ThemeContext.Provider value={Themehook}>
    <div>
      <Header></Header>
      <HeroSection/>
    </div>

  </ThemeContext.Provider>  
    
 
  );
}

export default App;
