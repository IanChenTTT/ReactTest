import { useEffect } from "react";
import { useRef } from 'react';
import getRandomInt from "./MathFunction";
let InitialSize = 0.8
let Element = Array(10).map(()=>{return InitialSize+0.1});

export default function Page1() {

  return (
    <div id="Page1">
      <div id="Circlewrapper">
        <span className="CircleLayer">
          <h3>
           <span>
            Portfolio
          </span>
            <br />
            I like building web
          </h3>
        </span>
          <CircleLayer size={0.9} layer={-1}></CircleLayer>
          <CircleLayer  size={0.92} layer={-2}></CircleLayer>
          <CircleLayer size={0.96} layer={-3}></CircleLayer>
          <CircleLayer size={1.1} layer={-4}></CircleLayer>

          <CircleLayer size={1.2} layer={-5}></CircleLayer>
          <CircleLayer size={1.3} layer={-6}></CircleLayer>
          <CircleLayer size={1.4} layer={-7}></CircleLayer>
          <CircleLayer size={1.5} layer={-8}></CircleLayer>
          <CircleLayer size={1.6} layer={-9}></CircleLayer>
          <CircleLayer size={1.7} layer={-10}></CircleLayer>
          <CircleLayer size={2.3} layer={-10}></CircleLayer>
          <CircleLayer size={3} layer={-10}></CircleLayer>
          <CircleLayer size={3.8} layer={-10}></CircleLayer>
          <CircleLayer size={4.5} layer={-10}></CircleLayer>
      </div>
    </div> 
    
  );
}
function CircleLayer({ size, layer }) { 
  const myRef = useRef(null);
  useEffect(()=>{
    console.log('render')
    console.log(myRef)
    
  },[])
  return (
    <span ref={myRef} className="OuterLayer" style={{
      scale: `${size}`,
      zIndex: `${layer}`,
      animationDuration: `${getRandomInt(4000,10000)}ms`,
      "--degree": `${getRandomInt(0,90)}deg`,
    }} ></span>
  );
}

let list = Element.map((value,index)=>{
  return <CircleLayer key={index} size={value}></CircleLayer>
})