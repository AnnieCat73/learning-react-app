//CONDITIONALS WITH PROPS FROM

//A) LAKE COMPONENT
import React from 'react'

function Lake(props) {
  return (
    <div>
      <h1>Visit {props.name}!</h1>
    </div>
    
  )
}
export default Lake;

//B) SKIRESORT COMPONENT
import React from 'react'

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}
export default SkiResort;

//C) THEN IN APP
import './App.css';
import './index.css';
import Lake from './Lake.js';
import SkiResort from './SkiResort.js';

let season = "";//add ""/or "autumn", "winter" or "summer" here

function App() {
  {/*1) if(season === "summer") {
    return <Lake name="Jenny Lake"/>
  } else if (season === "winter") {
    return <SkiResort name="Jackson Hole Mountain resort"/>
  }//NOT WORKS IN REACT

  IF ONLY ONE OR THE OTHER IT'S:
  condition ? exprIfTrue : exprIfFalse

  IF WITH ELSE IFS:
  function example(…) {
      return condition1 ? value1
          : condition2 ? value2
          : condition3 ? value3
          : value4;
  }
  // Equivalent to:
  function example(…) {
      if (condition1) { return value1; }
      else if (condition2) { return value2; }
      else if (condition3) { return value3; }
      else { return value4; }
  }*/}

  //2) or refactor
  return (
    <div>
      {season === "summer" ? (
        <Lake name="Jenny Lake" />
      ) : season === "winter" ? (
        <SkiResort name="Jackson Hole Mountain resort" />
      ) : (
        <h1>Come back in the winter or summer!</h1>
      )}
    </div>
  );
}
export default App;

//Another ex

//PlayTennis.js
import React from 'react'

function PlayTennis({ sport }) {
  return (
    <h2>Let's play {sport}!</h2>
  )
}
export default PlayTennis;

//Chess.js
import React from 'react'

function Chess({ sport }) {
  return (
    <h2>Let's play {sport}!</h2>
  )
}
export default Chess;

//App.js
import React from 'react';
import './App.css';
import './index.css';
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