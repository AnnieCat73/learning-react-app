//import logo from './logo.svg';

//import React, { useEffect, useState } from "react";//1
import React from 'react';
import './App.css';
import './index.css';
import Lake1 from './My Folder/Exercises/Lake1.js';
import NumberList from './My Folder/Exercises/NumberList.js';

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