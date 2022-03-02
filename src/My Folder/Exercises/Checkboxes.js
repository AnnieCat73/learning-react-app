//import React from 'react'
import React, { useState, useEffect } from "react";

function Checkboxes() {
  const [checked, setChecked] = useState(true);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  useEffect(() => {
    console.log(`input 1: ${input1}`)
  }, [input1, input2]);

  useEffect(() => {
    console.log(`input 2: ${input2}`)
  }, [input2]);
  
  
  return (
    
    <>
      
      <label>
        Favourite Words:
        <input value={input1} onChange={e => setInput1(e.target.value)}/>
      </label>
      <br />
      <label>
        Favourite Words:
        <input value={input2} onChange={e => setInput2(e.target.value)}/>
      </label>
      
      

      
    
    </>
  )
}

export default Checkboxes;