import { Component, useState } from 'react'
import './style.css';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';
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
