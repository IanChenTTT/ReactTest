import { Component, useState } from 'react'
import './style.css';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
function App() {
  return (
    <div className="App">
      <Page1></Page1>
      <Page2></Page2>
      <Page3></Page3> 
    </div>
  )
}

export default App
