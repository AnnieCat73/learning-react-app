//import logo from './logo.svg';

import React, { useEffect, useState } from "react";//1
//import React from 'react';
import './App.css';
import './index.css';
//import Checkbox from "./Checkbox.js";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  useEffect(() =>{
    console.log(`Favourite animal: ${value1}`)
  }, [value1]);

  useEffect(() =>{
    console.log(`Favourite animal: ${value2}`)
  }, [value2]);
  return (
    <>
      <label>
        Favourite Animal: 
        <input value={value1} onChange={e => setValue1(e.target.value)}/>
      </label>
      <br />
      <label>
        Favourite Animal: 
        <input value={value2} onChange={e => setValue2(e.target.value)}/>
      </label>
    </>
  );
}
export default App;