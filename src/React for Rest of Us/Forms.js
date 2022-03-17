/*import React from 'react';
import { useState} from 'react';

//NOT WORKING

/*Here f.ex how to add a form with to add
a new pet to the page/app. 3 fiels for
name, species and age. When click submit the new
pet will appear in the list*

function Forms() {
  const [pets, SetPets] = useState([
    { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    { name: "Paws", species: "dog", age: "6", id: 789789789 }
  ])//THIS IS NOT WORKING

  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [age, setAge] = useState()

  

  function handleSubmit(e) {
    e.preventDefault();
    setPets(prev => prev.concat({name, species, age, id: Date.now()}))
    setName("")//SO input fields goes blank after we have submitted 
    setSpecies("")
    setAge("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="species" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}

export default Forms;*/