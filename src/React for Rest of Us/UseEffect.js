import { useEffect } from 'react'

/*UseEffect

1)only run once the first time this component is rendered

// a = a function you want to run and b = what you want to watch
for changes, i.e the dependencies. When what's in b has changed
React will then call function in a

useEffect(a, b)
useEffect(() => {
  if (localeStorage.getItem("examplePetData")) {
    setPets(JSON.parse(localeStorage.getItem("examplePetData")))
  }
} , [])

2) run every time our pet state changes
useEffect(a, b)
useEffect(() => {
  localeStorage.setItem("examplePetData", JSON.stringify(pets))
}, [pets])
*/ 