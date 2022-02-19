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