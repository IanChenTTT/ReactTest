import { useEffect } from "react";
import { createElement } from "react";
export default function Page3() {
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
        </div>
      </div>
    </>
  );
}
function ChessImg({ name }) {
  const Chess = [
    {id:0,name: "WQ", rotate : 120},
    {id:1,name: "WR", rotate : 240},
    {id:2,name: "WB", rotate : 360},
    {id:3,name: "WN", rotate : 60},
    {id:4,name: "WP", rotate : 180},
  ]
  const listitem = Chess.map((chess)=>{
    <li key={chess.id}>
    <img src={`../image/${chess.name}.svg`} alt="" 
    style={{rotate: `${chess.rotate}deg`}}/>
    </li>
  })
  console.table(listitem);
  return <><ul>{listitem}</ul></>;
   
}
