//import logo from './logo.svg';

//import React, { useEffect, useState } from "react";
import React from 'react';
import './App.css';
import './index.css';
import Lake1 from './My Folder/Exercises/Lake1.js';
import SkiResort1 from './My Folder/Exercises/SkiResort1.js';

let season = "winter";


function App() {
  
  return (
    
    <div>
      {season === "summer" ? (
        <Lake1 name="Lake Garda" />
      ) : season === "winter" ? (
        <SkiResort1 name="Verbier" />
      ) : (
        <p>Come back in the winter or summer!!!</p>
      )}
      
      
      

    </div>
  );
}
export default App;