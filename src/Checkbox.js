//import React from 'react'
import React, { useState, useEffect } from 'react';

function Checkbox() {
  const [checked, setChecked] = useState(true);
  /*useEffect allows us to perform side effects
  inside of our function component so here
  an alert pops up when check and uncheck it i.e
  things we want the component to do other than
  return UI are called effects. F.ex alert,
  console.log, interaction with browser not part
  of render*/
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <>
      <input type="checkbox" 
        value={checked} 
        onChange={() => 
        setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}

export default Checkbox;