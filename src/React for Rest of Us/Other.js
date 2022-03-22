//import React from 'react'
import React, { useEffect, useState } from "react";

function Other() {
  const message = "Hello";
  let newMessage = 'Hi';

  const [value, setValue] = useState(5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`)
  }, [count])

  const [name, setName] = ("");
  useEffect(() => {
    console.log("You typed ${name}!")
    setName("");
  }, [name])
  //const handleName = (e) => setName(e.target.value);

  const handleCount = () => setCount(count - 1);
  return (
    <>
      <div>
        {
          message === 'Hi' ? (
            <p>'The new Message was "hello"'</p> 
            ) : (
              <p>{message}</p>
            )
        }
      </div>
      
      <div>
        <h1>{newMessage}</h1>
        <h2></h2>
      </div>
      <div style={{display:"flex"}}>
        <h3>New count is: {value}</h3>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <h4>Negative count: {count}</h4>
        <button onClick={handleCount}>Decrement me</button>
      </div>
      <div style={{padding: "2rem",display: "flex", gap: "1em"}}>
        <h1>Please type your name:</h1>
        <input style={{width:"15rem", height: "1.5rem",alignSelf:"center",marginTop: ".5em"}}type="text" value={name} onChange={e => setName(e.target.value)}/>

      </div>
      
    </>
    
  )
}

export default Other;