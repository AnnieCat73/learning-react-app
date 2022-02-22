import React, { useState } from "react";//1
//import React from 'react';IMP NOT HAVE THIS IN 
import './App.css';
import './index.css';

/*STATE
1) import useState Hook 
2) Add useState function with initial state
3) Add [status] to h1 in {status} so it can load the
status to be 'open'.[status] is the state value
4) [status, setStatus] - setStatus is the function we
use to update the state
5) To operate the setStatus function need to add a btn
6) In button add onClick={() => setStatus("Closed")},
so when click on btn it runs function setStatus i.e Closed
7) A btn added for state to change to 'Open'
*/

function App() {
  const [status, setStatus] = useState("Open");//2/3/4
  
  return (
    <div>
      <h1>Status: {status}</h1>{/*3)Status refelects the current status of the app*/}
      <button onClick={() => setStatus("Closed")}>Closes</button>{/*5 then 6*/}
      <button onClick={() => setStatus("Open")}>Opens</button>{/*5 then 6 then 7*/}
      <button onClick={() => setStatus("Back in 5")}>Break</button>{/*5 then 6 then 7*/}
    </div>
    
  );
}
export default App;