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