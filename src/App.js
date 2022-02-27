//import logo from './logo.svg';

//import React, { useEffect, useState } from "react";//1
import React from 'react';
import './App.css';
import './index.css';
import Lake1 from './My Folder/Exercises/Lake1.js';

const lakesArray = ["Lake District", "Loch Ness", "Lake Michigan"];
const lakes = lakesArray.map((lake, index) => (
  <li key={index}>{lake}</li>
));

const lakesObjects = [
  {id: "1", name: "Ness", trailhead: "Loch"},
  {id: "2", name: "Sally", trailhead: "Wrights"},
  {id: "3", name: "Tarzan", trailhead: "Bayview"}
];
const objectsLakes = lakesObjects.map(lakeObject => (
  <div key={lakeObject.id}>
    <h2>{lakeObject.name}</h2>
    <p>{lakeObject.trailhead}</p>
  </div>
));

function App() {
  
  return (
    <div>
      <Lake1
        name="Lake Ontario" 
      />
      <ul className="list">
        {lakes}
      </ul>

      <ul>{objectsLakes}</ul>

    </div>
  );
}
export default App;