import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(4);

  function incCount() {
    setCount(prevCount => prevCount + 1);
  }

  function decCount() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <>
      <button onClick={decCount}>-</button>
      <span>{count}</span>
      <button onClick={incCount}>+</button>
    </>
  )

}


export default App;
