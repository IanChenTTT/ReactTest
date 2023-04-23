import { useState } from "react";
export default function page5() {
  const [isPress,SetisPress] = useState(false);
  const Rwd = () =>{
    SetisPress(!isPress)
  }
  return (
    <>
      <div id="Page5" className="Eachpage AwsomeFont">
        <span style={{top: "20%", rotate: "320deg"}} onMouseEnter={Rwd} className={isPress?"gradientText" :"NongradientText"}>{isPress? "RESIZE":"RWD"}</span>
        <a href=" https://github.com/IanChenTTT/ReactTest.git" target="blank">
        <span style={{top: "20%", rotate: "-320deg", right: "10%"}}className="gradientText">REACT</span>
        </a>
        <a href=" https://github.com/IanChenTTT/ReactTest.git" target="blank">
        <span style={{bottom: "20%", rotate: "-45deg", right: "10%"}}className="gradientText">Github</span>
        </a>
        <span style={{bottom: "20%", rotate: "-320deg",}}  onMouseEnter={Rwd} className={isPress?"gradientText" :"NongradientText"}>Press</span>
        <div id="Circlewrapper">
          <p>This website is Host by </p>
            <span><img src="/image/firebase.svg" alt="" /></span>
        </div>
      </div>
    </>
  );
}
