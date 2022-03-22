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
      <h3>New count is: {value}</h3>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <h4>Negative count: {count}</h4>
      <button onClick={handleCount}>Decrement me</button>
    </>
    
  )
}

export default Other;