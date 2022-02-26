//IN CheckboxReducer COMPONENT
import React, { useReducer } from "react";

function CheckboxReducer() {
  const [checked, toggle] = useReducer(
    checked => !checked, false);
  //Provide function as a toggle i.e a Reducer Function
  //Reducer function -takes in the current state and it
  //returns a new state
  
  return (
    <>
      <input 
        type="checkbox" 
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked": "not checked"}
    </>
  )
}
export default CheckboxReducer;

//Then in App.js

import React, { useEffect, useState } from "react";//1
import './App.css';
import './index.css';
import CheckboxReducer from "./CheckboxReducer.js";

function App() {
  
  return (
    <CheckboxReducer />
  );
}
export default App;
