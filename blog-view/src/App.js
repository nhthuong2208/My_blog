import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('/api').then(response => response.json())
    .then(data => {
      setData(data)
      console.log(data)
    })
  }, [])
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.age}</p>
    </div>
  );
}

export default App;
