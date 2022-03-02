//useEffect with useState and Dependency Array

import React, { useEffect, useState } from "react";//1
import './App.css';
import './index.css';

function App() {
  const [value, setValue] = useState("");//1)Add inital state and useState function. 2) Tie initial state to input
  const [value2, setValue2] = useState("");//1)Add inital state and useState function
  /*3) To change state use onChange() i.e so every
      time I type into it it will collect the value
  4)use useEffect to f.ex console.log value of each input/values in below fields
  5) BUT only want one field to update at a time so need to use a
  dependency array. Right at end of useEffect function in []
  So if we put [value] in here it will only fire useEffect for first field BUT CAN PASS BOTH FIELDS IN TO IF NEEDED LIKE THIS:
  useEffect(() => {
    console.log(`field 1: ${value}`);
  }, [value, value2]);
  */
  
  useEffect(() => {
    console.log(`field 1: ${value}`);
  }, [value]);{/*5) */}
  
  useEffect(() => {
    console.log(`field 2: ${value2}`);
  }, [value2]);{/*5) */}
  
  return (
    <>
      <label>
        Favourite Phrase:
        <input value={value} onChange={e => setValue(e.target.value)}/>{/*2)Tie value/i state to input */}{/*3) */}
      </label>
      <br />
      <label>
        Second Favourite Phrase:
        <input value={value2} onChange={e => setValue2(e.target.value)}/>{/*2) Tie value2/i state to input */}{/*3) */}
      </label>

    </>
  );
}
export default App;