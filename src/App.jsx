import { Component, useState } from 'react'
import './style.css';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'

function App() {
  const [scroll,setScroll] = useState(false)
  const IsScroll = ()=>{
    const scrollvalue= window.scrollY;
    scrollvalue > 40 ? setScroll(true) :setScroll(false)
  }
   window.addEventListener('scroll', IsScroll);
  return (
    <div className="App">
      <Page1 scroll = {scroll}></Page1>
      <Page2></Page2>
      <Page3></Page3> 
      <Page4 scroll={scroll}></Page4>
      <Page5></Page5>
    </div>
    
  )
}

export default App
