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