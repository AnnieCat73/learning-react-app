import React from 'react'

/*So with props ex previously if we had
100s of pets it would take a long time to
write out all the 100s of props so instead
map the array of pets. So loop through the
array and do something with each item*/

const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 }
]



function Loop() {
  const allPets = pets.map( (pet,id) => <li key={id}>{pet.name} is a {pet.species} and is {pet.age}</li>)
  return (
    <ul>
      {allPets}
    </ul>
  )
}

export default Loop;

/*OR
function Loop() {
  return (
    <ul>
      {pets.map((pet, id) => <li key={id}>{pet.name} is a {pet.species} and is {pet.age}</li>)}
    </ul>
  )
}

export default Loop;
*/