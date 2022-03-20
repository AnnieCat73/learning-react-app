import React from 'react'

//Loops with for of and map

function Loops() {

  //for of loop
  //The entries() method returns an Array Iterator object with key/value pairs
  const elements = ['one', 'two', 'three'];
  const items = [];
  for (const [index, element] of elements.entries()) {
    items.push(<li key={index}>{element}</li>)
  }
  //map
  //1
  const numbers = elements.map((element, index) => {
    return <li key={index}>{element}</li>
  })

  return (
    <>
      <div>
        {items}
      </div>
      <div>
        {numbers}
      </div>
      <div>{/*2) or directly in jsx*/}
        {elements.map((index, element) => {
          return <li key={index}>{element}</li>
          })}
      </div>
    </>
    
  )
}

export default Loops;