import React from 'react'

/*Props
- 'looks like HTML attribute but are properties'
- To give any attribute or piece of data to any
component*/

function props(props) {
  return (
    <li>{props.name} is a {props.species} and is {props.age} years old</li>
  )
}

export default props;

/*or

function props({ name, species, age}) {
  return (
    <li>{name} is a {species} and is {age} years old</li>
  )
}

THEN IN APP

function App() {
  return (
    <>
      <ComponentEx />
      <p>The current time is {new Date().toLocaleString()}</p>
      <Props name="Meowsalot" species="cat" age="5"/>
      <Props name="Barksalot" species="dog" age="2" />
      <Props name="Fluffy" species="rabbit" age="3"/>
      <small>Copyright Footer Text</small>
    </>
    
  );
}
export default App;*/
