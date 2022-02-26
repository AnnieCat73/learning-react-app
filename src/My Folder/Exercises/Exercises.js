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