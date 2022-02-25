//import React from 'react'
import React, { useState, useEffect } from "react";

function GitHubUser( {login} ) {

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
        <img src={data.avatar_url} width={100} />
      </div>//**Gets AnnieCat73
    );
  }
  return null;
}

export default GitHubUser;