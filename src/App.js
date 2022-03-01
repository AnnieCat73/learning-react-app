//import logo from './logo.svg';

import React, { useState } from "react";
//import React from 'react';
import './App.css';
import './index.css';


function App() {

  const [status, setStatus] = useState("We are loading...");
  const [manager, setManager] = useState("Matt");
  
  return (
    <>
      <div>
        <h1>{status}</h1>
        <button onClick={() => setStatus("Close")}>Close</button>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("We are on a break!")}>On a break</button>
      </div>

      <div>
        <h2>Our manager is: {manager}</h2>
        <button onClick={() => setManager("Sally")}>Add Manager</button>
        <button onClick={() => setManager("Samuel")}>Add Another Manager</button>
        <button onClick={() => setManager("We have no manager on duty right now!")}>Closed</button>
      </div>
    </>
    
  );
}
export default App;