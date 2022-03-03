import React, { useState, useEffect } from 'react';

function ApiGithub({login}) {
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
        <p>{data.location}</p>
        

      </div>
    );
  }
  return null;
}

export default ApiGithub;