import React, { useState } from "react";//1
//import React from 'react';
import './App.css';
import './index.css';

/*USING MULTIPLE STATE VARIABLES
1) Along with status we have manager
so when this app loads Alex will be the manager
2) in h1 get the state of the current manager
3) Then use setManager function i.e create a btn
When we click on it we get Rachel as new manager
4) Add another - year -*/

function App() {
  const [year, setYear] = useState(2050);//4
  const [manager, setManager] = useState("Alex");//1 - Alex is initial state
  const [status, setStatus] = useState("Open");
  
  
  return (
    <>
      <div>{/*4 */}
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>New Year</button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>{/*2 */}
        <button onClick={() => setManager("Rachel")}>New Manager</button>{/*3 */}
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Closed")}>Closes</button>
        <button onClick={() => setStatus("Open")}>Opens</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
      </div>
    
    </>
  );
}
export default App;