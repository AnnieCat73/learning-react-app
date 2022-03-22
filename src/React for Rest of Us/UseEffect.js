import { useEffect,useState } from 'react';

/*UseEffect

The useEffect hook allows components to have
access to the lifecycle events of a component.
When you call the hook, you pass it a function. The
function will be run by React when the component is
first rendered, and on every subsequent re-render/update.
React first updates the DOM, then calls any function
passed to useEffect() .

Since the useEffect() function is run on every
subsequent re-render/update of the component, we
can tell React to skip it, for performance purposes, by
adding a second parameter which is an array that
contains a list of state variables to watch for. React will
only re-run the side effect if one of the items in this
array changes.

Similarly, you can tell React to only execute the side
effect once (at mount time), by passing an empty
array:
useEffect(() => {
 console.log(`Component mounted`)
}, [])


useEffect(() => {
 console.log(`Hi ${name} you clicked ${count} times
}, [name, count])//only rerender if name and count changes

You migtht find yourself using this option a lot.
useEffect() is great for adding logs, accessing 3rd
party APIs and much more

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


/************
 * <input type="text" value={name}
       onChange={(e) => setName(e.target.value)} />
 */



function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Paul");

  useEffect(() => {
    console.log(`Hi, you clicked ${count} times`)
  },[count, name]) //This will only run if count,name changes
  //So count, name is a sideEffect
  const handleCount = () => {
    setCount(count + 1);
    setName("");//so input goes empty for next time you type
  }
  return (
    <div>
      <p>{name} clicked {count} times</p>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={handleCount}>Click me</button>
    </div>
  )
}

export default UseEffect