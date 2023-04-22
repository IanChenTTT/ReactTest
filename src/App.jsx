import { Component, useState } from 'react'
import './style.css';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'

function App() {
  return (
    <div className="App">
      <Page1></Page1>
      <Page2></Page2>
      <Page3></Page3> 
      <Page4></Page4>
      <Page5></Page5>
    </div>
  )
}

export default App
