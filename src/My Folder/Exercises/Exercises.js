import React from 'react';
import './App.css';
import './index.css';

function App() {
  const sum = 5 + 8;
  let cat = "Mimi";
  let city = {
    cityName: "London",
    country: 'England'
  }
  return (
    <div>
      <h1>{cat} lives in {city.cityName}, {city.country}</h1>
      <p>5 + 8 = {sum}</p>
      {5 / 5}
      
    </div>
  );
}
export default App;

import React from 'react'

function Hello1(props) {
  console.log(Object.keys(props));
  return (
    <div>
      <h1>Welcome to {props.library}</h1>
      <p>{props.message}!!!</p>
      <p style={{fontWeight: 'bold', fontSize: '2rem'}}>{props.number}</p>
      <p>Props total: {Object.keys(props).length}</p>
    </div>
  )
}

export default Hello1;

import React from 'react'

function Hello1({ library, message, number }) {
  
  return (
    <div>
      <h1>Welcome to {library}</h1>
      <p>{message}!!!</p>
      <p style={{fontWeight: 'bold', fontSize: '2rem'}}>{number}</p>
      
    </div>
  )
}

export default Hello1;

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

const people = [
  {firstName: "Sally", lastName: "Edwards"},
  {firstName: "Henry", lastName: "Winkler"},
  {firstName: "Trudy", lastName: "Sullivan"},
  {firstName: "Tamar", lastName: "Kelly"}
];
const peopleList = people.map((person, index) => (
  <li key={index}>{person.firstName} {person.lastName}</li>
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
      <ul>{peopleList}</ul>
    </div>
  );
}
export default App;

//useState
import React, { useState } from "react";
//import React from 'react';
import './App.css';
import './index.css';


function App() {

  const [status, setStatus] = useState("We are loading...");
  const [cat, setCat] = useState("Nelson");
  
  return (
    <>
    <div>
        <h3>The cat in the house right now is: <span>{cat}</span>!</h3>
        <button onClick={()=> setCat("Mimi")}>Get another Cat</button>
        <button onClick={()=> setCat("no cats in the house...")}>Have no Cat</button>
      </div>
      <div>
        <h1>{status}</h1>
        <button onClick={() => setStatus("Close")}>Close</button>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("We are on a break!")}>On a break</button>
      </div>
    </>
    
  );
}
export default App;

//UseEffect ex
//in Checkboxes.js to be exported to App.js
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

//IN CheckboxReducer COMPONENT
import React, { useReducer } from "react";

function CheckboxReducer() {
  const [checked, toggle] = useReducer(
    checked => !checked, false);
  //Provide function as a toggle i.e a Reducer Function
  //Reducer function -takes in the current state and it
  //returns a new state
  
  return (
    <>
      <input 
        type="checkbox" 
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked": "not checked"}
    </>
  )
}
export default CheckboxReducer;

/*Then in App.js

import React, { useEffect, useState } from "react";
import './App.css';
import './index.css';
import CheckboxReducer from "./CheckboxReducer.js";

function App() {
  
  return (
    <CheckboxReducer />
  );
}
export default App;*/