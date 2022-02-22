import React from 'react';
import './App.css';
import './index.css';
import Lake from './Lake.js';
import SkiResort from './SkiResort.js';

/*FRAGMENTS
function App() {
  
  return (
    <div>
      <Lake />
      <SkiResort />
    </div>
    
  );
}
export default App;

NB Lots of divs if we put <Lake /> and
<SkiResort /> into a div...
<div> in root then potentially 
a <div> around <Lake /> then <div> around 
all in App

SO INSTEAD USE A REACT.FRAGMENT

function App() {
  
  return (
    <React.Fragment>
      <Lake />
      <SkiResort />
    </React.Fragment>
    
  );
}
export default App;*/

//OR FRAGMENT SHORTHAND <>

function App() {
  
  return (
    <>
      <Lake />
      <SkiResort />
    </>
    
  );
}
export default App;