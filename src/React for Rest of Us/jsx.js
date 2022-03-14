//import logo from './logo.svg';

import React, { useState, useEffect } from "react";
//import React from 'react';
import './App.css';
import './index.css';

/*
Differences btwn HTML and jsx
1)React fragment <></> so React won't output an
unnecessary div in your mark-up but but still need
1 top-level element
2)Use of className
3)Use {} when include js in jsx
4)<OurApp />*/


function App() {
  
  
  
  return (
    <>
      <h1>Our Amazing App Header</h1>
      <p>The current time is {new Date().toLocaleString()}</p>
      <small>Copyright Footer Text</small>
      
      
      
      
    </>
    
  );
}
export default App;