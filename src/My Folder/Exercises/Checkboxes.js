//import React from 'react'
import React, { useState, useEffect } from "react";

function Checkboxes() {
  const [checked, setChecked] = useState(true);
  
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    
    <>
      <input type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
      
      

      
    
    </>
  )
}

export default Checkboxes;