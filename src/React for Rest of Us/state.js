//import React from 'react'
import { useState } from "react";

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

export default State;