//IN COMPONENT LAKE.JS - DESTRUCTURED PROPS.NAME
import React from 'react'

function Lake({ name }) {
  return (
    <h1>{name}</h1>
  )
}

export default Lake;

//IN APP AS <LAKE /> AND MAP OVER NEW ARRAY OF LAKES

import './App.css';
import './index.css';
import Lake from './Lake.js';

const lakeList = ["Echo Lake", "Maud Lake", "Cascade Lake"];
const lakes = lakeList.map((lake, index) => (
  <li key={index}>{lake}</li>
));

function App() {
  

  return (
    <div className="App">
      <Lake name="Lake Shirley"/>
      <Lake name="Lake Ontario"/>

      <ul className="list">
        {lakes}
      </ul>
      
      
    </div>
  );
}

export default App;