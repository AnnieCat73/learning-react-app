//APP/JSX;
import './App.css';
import './index.css';
import Hello from './Hello'

function App() {
  let person = "Pedro";
  let city = {
    cityName: 'Madrid',
    country: 'Spain'
  };

  return (
    <div className="App">
      <Hello 
        library="React"
        message="Let's have fun!"
        number={3}
      />
      <h2 id="heading" className="cool-text">Hello from {person} and I am from {city.cityName}, {city.country} </h2>
    </div>
  );
}

export default App;


//HELLO COMPONENT PROPS
import React from 'react'

function Hello(props) {
  console.log(Object.keys(props));//Array(3) 0: "library" 1: "message" 2: "number"
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>I am number {props.number}!</p>
      <p>Props total: {Object.keys(props).length}</p>{/*Get how many props you have */}
    </div>
    
  )
}

export default Hello;

/*ALSO DO:
function Hello({ library, message, number}) {
 
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>{message}</p>
      <p>I am number {number}!</p>
      
    </div>
    
  )
}

export default Hello*/