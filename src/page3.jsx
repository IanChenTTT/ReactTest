import { useRef } from "react";
import { useState } from "react";
export default function page3() {
  return (
    <>
      <div id="Page3" className="Eachpage">
        <div id="Circlewrapper">
          <span className="CircleLayer">
            <h3>
              <span>project</span>
            </h3>
          </span>
        </div>
        <div id="Circlewrapper">
          <span className="CircleLayer">
            <ChessImg></ChessImg>
          </span>
          <span className="CircleLayer">
            <h3>contact
              <span><br />
              me
              </span>
            </h3>
          </span>
        </div>
      </div>
    </>
  );
}
function ChessImg({ name }) {
  const refs = useRef([])
  const [imgState, setImageState] = useState(false)
  const imgEnter = (index)=>{
    setImageState(true);
    const element = refs.current[index];
    console.log(element)
  }
  const imgLeave = (index)=>{
    setImageState(false)
  }
  const Chess = [
    { id: 0, name: "WQ",Rname: "BQ", rotate: 332, inset: "-40% 0 0 0" },
    { id: 1, name: "WR",Rname: "BR", rotate: 240, inset: "0 0 0 -80%" },
    { id: 2, name: "WB",Rname: "BB", rotate: 281, inset: "0 0 0 -37%" },
    { id: 3, name: "WN",Rname: "BN", rotate: 248, inset: "50% 0 0 -25%" },
    { id: -1000, name: "WP",Rname: "BP", rotate: 170, inset: "80% 0 0 20%" },
    { id: 4, name: "WK",Rname: "BK", rotate: 0, inset: "20% 0 0 20%" },
  ];
  const listitem = Chess.map((chess,index) => {
    return (
      <li
        key={chess.id}
        style={{
          position: "absolute",
          inset: `${chess.inset}`,
          zIndex: `${chess.id}`,
        }}
       
      >
        <a href=" https://github.com/IanChenTTT/MidTermV1tst" target="blank">
          <img
            ref={ref => (refs.current[index] = ref)}
            id={chess.name}
            src={imgState ?`/image/${chess.Rname}.svg` :`/image/${chess.name}.svg`}
            alt=""
            style={{
              rotate: `${chess.rotate}deg`,
              width: "100%",
              height: "100%",
            }}
              onMouseEnter={()=>imgEnter(index)} 
              onMouseLeave={()=>imgLeave(index)}
              loading="lazy"
          />
    
        </a>
      </li>
    );
  });
  console.table(listitem);
  return (
    <>
      <ul >{listitem}
      <p className="AwsomeFont">
      PRESS
      </p>
      </ul>
    </>
  );
}
