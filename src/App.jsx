/* /* import {createContext} from "react";
import Hen from "./Hen";
export let nameContext=createContext();



function App() {
    return(
        <nameContext.Provider value="water">
            <Hen/>
            <button type="button">Click me</button>

            
        </nameContext.Provider>
    )
}
export default App

 */

//import { useState } from "react";

/* import React, { useState } from 'react';
import styles from './Stomach';

function App() {
  const [clickCount, setClickCount] = useState(0);


  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  let textStyle = { ...styles.textBase };

  if (clickCount % 2 === 0) {

    textStyle = { ...textStyle, ...styles.backgroundBlack, ...styles.textWhite };
  } else {
    
    textStyle = { ...textStyle, ...styles.backgroundWhite, ...styles.textBlack };
  }

  return (
    <div>
      <h1 style={textStyle}>Harshini</h1>
      <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Click Me
      </button>
    </div>
  );
}

export default App;
 */
/* import {useState,useMemo} from "react";

function App(){
    let[Number,setNumber]=useState(0);
    let[dark,setDark]=useState(false);

    let doubleNum = useMemo(()=>{
        return slowFunction(Number);

    },[Number])

    let themestyle={
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black',
    }

    return(
        <div>
            <input type="number" value={Number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>setDark((val)=>!val)}>Theme change</button>
        </div>
    )
}
export default App */ 

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Details from "./Details.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;
