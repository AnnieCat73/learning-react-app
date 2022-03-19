import React from 'react'

/*Props
- 'looks like HTML attribute but are properties'
- To give any attribute or piece of data to any
component
- We call props the initial values passed to a
component.
EX
<WelcomeMessage />
This component does not have any initial value. It
does not have props.

Props can be passed as attributes to the component in
the JSX:
<WelcomeMessage myprop={'somevalue'} />

and inside the component we receive the props as
argument:
function WelcomeMessage(props) {
 return <p>Welcome!</p>
}

It's common to use object destructuring to get the
props by name:
function WelcomeMessage({ myprop }) {
 return <p>Welcome!</p>
}
Now that we have the prop, we can use it inside the
component, for example we can print its value in the
JSX:
function WelcomeMessage({ myprop }) {
 return <p>{myprop}</p>
}

A component either holds data (has state) or receives
data through its props.

We can also send functions as props, so a child
component can call a function in the parent
component.

A special prop is called children . That contains the
value of anything that is passed between the opening
and closing tags of the component, for example:
30
In this case, inside WelcomeMessage we could access
the value Here is some message by using the
children prop:
function WelcomeMessage({ children }) {
 return <p>{children}</p>
}

*/

function Props(props) {
  function handleDelete() {
    
  }
  return (
    <li>{props.name} is a {props.species} and is {props.age} years old
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Props;

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
