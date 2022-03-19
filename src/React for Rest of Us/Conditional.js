import React from 'react'

let isDog = false;

let food = "pizza";

let body = "thin";

function Conditional() {
  return (
    <>
      <div>
        {isDog === true ? (
          <p>I am a dog!</p>
        ) : (
          <p>I am a cat!</p>
        )}
      </div>
      <div>
        {food === "hot dog" ? (
          <p>I am a bit tasty hot dog!</p>
        ) : food === "pizza" ? (
          <p>I am a spicy pizza!</p>
        ) : (
          <p>I am marmalade</p>
        )}
      </div>
      <div>
          {body === "thin" ? (
            <p>I am skinny!</p>
          ) : (
            <p>I am fat</p>
          )}
      </div>
    </>
    
  )
}

export default Conditional;