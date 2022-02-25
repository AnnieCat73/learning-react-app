//in GitHubUser.js COMPONENT
import React, { useState, useEffect } from "react";

function GitHubUser( {login} ) {//destructured

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if(data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} alt={"User avatar"}/>
      </div>//**Gets AnnieCat73
    );
  }
  return null;
}
export default GitHubUser;

//THEN in APP.js
import React, { useEffect, useState } from "react";//1
import './App.css';
import './index.css';
import GitHubUser from "./GitHubUser.js";

function App() {
  
  return (
    <GitHubUser login="AnnieCat73"/>
  );
}
export default App;