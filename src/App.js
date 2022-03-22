//import logo from './logo.svg';

import React, { useState } from "react";
//import React from 'react';
import ComponentEx from './React for Rest of Us/ComponentEx';
import Props from './React for Rest of Us/Props';
import Loop from './React for Rest of Us/Loop';
import State from './React for Rest of Us/State';
import Forms from './React for Rest of Us/Forms';
import UseEffect from "./React for Rest of Us/UseEffect";
import './App.css';
import './index.css';
import Conditional from "./React for Rest of Us/Conditional";
import Loops from "./React for Rest of Us/Loops";

import Other from "./React for Rest of Us/Other";
/*
Events that can change date f.ex
a user can click a button - how do we respond to that, scroll the
page or type letters on keyboard i.e with that the state changes..
All we have to care about is managing
the apps data and React automatically rerenders things
on it's own. We don't have to manage/tell it to render
at the appropriate time. We only tell it render once as the page first loads i.e the code at the bottom */

//const useState = useState();



function App() {
  
  
  
  return (
    <>
      <ComponentEx />
      <State />
      <Forms />
      <Props name="Meowsalot" species="cat" age="5"/>
      <Props name="Barksalot" species="dog" age="2" />
      <Props name="Fluffy" species="rabbit" age="3"/>
      <Loop />
      <small className="small">Copyright Footer Text</small>
      <UseEffect />
      <Conditional />
      <Loops />
      <Other />
    
    </>
    
  );
}
export default App;