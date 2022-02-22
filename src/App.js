//import logo from './logo.svg';

import React, { useState } from "react";//1
//import React from 'react';
import './App.css';
import './index.css';





function App() {
  const [status, setStatus] = useState("Open");//2/3/4
  
  return (
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Closed")}>Closes</button>
      <button onClick={() => setStatus("Open")}>Opens</button>
      <button onClick={() => setStatus("Back in 5")}>Break</button>
    </div>
    
  );
}
export default App;