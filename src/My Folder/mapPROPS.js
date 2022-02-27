//1) IN COMPONENT LAKE.JS - DESTRUCTURED PROPS.NAME
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

//2 )WITH ARRAY OF LIST
const lakeList = ["Echo Lake", "Maud Lake", "Cascade Lake"];
const lakes = lakeList.map((lake, index) => (
  <li key={index}>{lake}</li>
));

//3) WITH OBJECTS
const lakeListObjects = [
  {id: "1", name: "Echo", trailhead: "Echo"},
  {id: "2", name: "Maud", trailhead: "Wrights"},
  {id: "3", name: "Velma", trailhead: "Bayview"}
];

const lakesObjects = lakeListObjects.map(lakeObject => (
  <div key={lakeObject.id}>
    <h2 >{lakeObject.name}</h2>
    <p>Accessed by: {lakeObject.trailhead}</p>
  </div>
))

//4) WITH NUMBERS
const list = [1, 2, 3, 4, 5];
const listItems = list.map((item, index) => (
  <li key={index}>{item}</li>
));


function App() {
  

  return (
    <div className="App">
      <Lake name="Lake Shirley"/>{/*1)*/}
      <Lake name="Lake Ontario"/>

      <ul className="list">{/*2)*/}
        {lakes}
      </ul>
      {lakesObjects}{/*3)*/}

      <ul className="list">{/*4)*/}
        {listItems}
      </ul>
      
    </div>
  );
}

export default App;

//ANOTHER EX
import React from 'react'

const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbersItems = numbers.map((number, index) => (
  <li key={index}>{number}</li>
));
function NumberList() {
  return (
    <ul>
     {numbersItems}
    </ul>
  );
}
export default NumberList;

//Then in App
function App() {
  
  return (
    <div>
      <NumberList />

    </div>
  );
}
export default App;