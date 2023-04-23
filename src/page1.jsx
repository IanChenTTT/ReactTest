import { useEffect } from "react";
import { useRef } from "react";
import getRandomInt from "./util/MathFunction";
// import { scroll } from './util/Scroll';
let InitialSize = 0.8;
let Element = Array(10).map(() => {
  return InitialSize + 0.1;
});

export default function page1({ scroll }) {
  console.log(scroll);
  return (
    <div id="Page1" className="Eachpage">
      <div id="Circlewrapper">
        <span className="CircleLayer">
          <h3 >
            <span>I like building web</span>
          </h3>
        </span>
        <CircleLayer size={0.9} layer={1} scroll={scroll}></CircleLayer>
        <CircleLayer size={0.92} layer={-2} scroll={scroll}></CircleLayer>
        <CircleLayer size={0.96} layer={-3} scroll={scroll}></CircleLayer>
        <CircleLayer size={1.1} layer={-4} scroll={scroll}></CircleLayer>
        <CircleLayer size={1.2} layer={-5} scroll={scroll}></CircleLayer>
        <CircleLayer size={1.3} layer={-6} scroll={scroll}></CircleLayer>
        <CircleLayer size={1.4} layer={-7} scroll={scroll}></CircleLayer>
        <CircleLayer size={1.5} layer={-8} scroll={scroll}></CircleLayer>
        <CircleLayer size={1.6} layer={-9} scroll={scroll}></CircleLayer>
        <CircleLayer size={1.7} layer={-10} scroll={scroll}></CircleLayer>
        <CircleLayer size={2.3} layer={-11} scroll={scroll}></CircleLayer>
        <CircleLayer size={3} layer={-12} scroll={scroll}></CircleLayer>
        <CircleLayer size={3.8} layer={-13} scroll={scroll}></CircleLayer>
        <CircleLayer size={4.3} layer={-14} scroll={scroll}></CircleLayer>
        <CircleLayer size={4.5} layer={-15} scroll={scroll}></CircleLayer>
      </div>
    </div>
  );
}
export function CircleLayer({ size, layer, scroll }) {
  const myRef = useRef(null);
  useEffect(() => {
    // console.log('render')
    // console.log(myRef)
  }, []);
  return (
    <span
      ref={myRef}
      className={`OuterLayer ${scroll ? "OuterLayerAnim" : ""}`}
      style={{
        scale: `${size}`,
        zIndex: `${layer}`,
        animationDuration: `${getRandomInt(9000, 10000)}ms`,
        "--degree": `${getRandomInt(0, 90)}deg`,
      }}
    ></span>
  );
}

let list = Element.map((value, index) => {
  return <CircleLayer key={index} size={value}></CircleLayer>;
});
