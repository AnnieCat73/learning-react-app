//import logo from './logo.svg';

//import React, { useEffect, useState } from "react";
import React from 'react';
import './App.css';
import './index.css';
import Lake1 from './My Folder/Exercises/Lake1.js';
import SkiResort1 from './My Folder/Exercises/SkiResort1.js';
import PlayTennis from './My Folder/Exercises/PlayTennis.js';
import Chess from './My Folder/Exercises/Chess.js';


let weather = "sunny";


function App() {
  
  return (
    
    <div>
      {weather === "sunny" ? (
        <PlayTennis sport="tennis" />
      ) : weather === "rainy" ? (
        <Chess sport="chess" />
      ) : (
        <h2>Let's windsurf!!!</h2>
      )}
      
      
      
      

    </div>
  );
}
export default App;