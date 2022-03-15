//import logo from './logo.svg';

//import React, { useState, useEffect } from "react";
import React from 'react';
import ComponentEx from './React for Rest of Us/ComponentEx';
import Props from './React for Rest of Us/props';
import Loop from './React for Rest of Us/Loop';

import './App.css';
import './index.css';



function App() {
  
  
  
  return (
    <>
      <ComponentEx />
      <p>The current time is {new Date().toLocaleString()}</p>
      <Props name="Meowsalot" species="cat" age="5"/>
      <Props name="Barksalot" species="dog" age="2" />
      <Props name="Fluffy" species="rabbit" age="3"/>
      <Loop />
      <small>Copyright Footer Text</small>
    </>
    
  );
}
export default App;