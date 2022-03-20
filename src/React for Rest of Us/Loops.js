import React from 'react'

//Loops with forEach and map

function Loops() {

  //for of loop
  //The entries() method returns an Array Iterator object with key/value pairs
  const elements = ['one', 'two', 'three'];
  const items = [];
  for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>)
  }

  //map

  return (
    <>
      <div>
        {items}
    </div>
    </>
    
  )
}

export default Loops;