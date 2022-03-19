//import React from 'react'
import { useState } from "react";

/**
 * What do we mean by state? The state is the set of
data that is managed by the component
F.ex: Each individual input
element of the form is responsible for managing its
state: what is written inside it.Or abutton is 
responsible for knowing if it's being clicked,
or not. If it's on focus.
React manage state using the useState hook.
Calling useState you will get back a new state
variable, a function that we can call to alter its
value.

const [count, setCount] = useState(0)
useState() accepts the initial value of the state item
and returns an array containing the state variable, and
the function you call to alter the state.

You can add as many useState() calls you want, to
create as many state variables as you want:

const [count, setCount] = useState(0)
const [anotherCounter, setAnotherCounter] = useState

*/

//prev is used as a paramenter for previous value clicked
function State() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => setCount(count + 1);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default State;

/*ANOTHER EX
//prev is used as a paramenter for previous value clicked
function State() {
  
  const [likeCount, setLikeCount] = useState(0);
  function increaseLikeHandler() {
    setLikeCount(function(prev) {
      return prev + 1;
    })
  }

  function decreaseLikeHandler() {
    setLikeCount(prev => {
      if (prev > 0) {
        return prev -1;
      } else {
        return 0;//so not go into - nos
      }
    })
  }
  return (
    
    <>
      <button onClick={increaseLikeHandler}>Increase likes</button>
      <button onClick={decreaseLikeHandler}>Decrease likes</button>
      <h2>This page has been liked {likeCount} times.</h2>
    </>
  )
}

export default State;*/