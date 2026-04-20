import React, { useState } from "react";
import { Toggle } from "./components/Toggle"; 
import "./App.css";


export const App = () => {

  const [isDark, setIsDark] = useState(false);

 

  return (
     <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1 className="title">Hola Mundo!!</h1>
      <div className="box">
        <h2>Esto es una caja</h2>
      </div>
    </div>
  )
  
}

