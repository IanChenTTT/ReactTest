import { useEffect } from "react";
import { createElement } from "react";
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
        </div>
      </div>
    </>
  );
}
function ChessImg({ name }) {
  const Chess = [
    { id: 0, name: "WQ", rotate: 332 , inset: "-40% 0 0 0"},
    { id: 1, name: "WR", rotate: 240, inset: "0 0 0 -80%" },
    { id: 2, name: "WB", rotate: 281, inset: "0 0 0 -37%" },
    { id: 3, name: "WN", rotate: 248, inset:  "50% 0 0 -25%"},
    { id: 4, name: "WP", rotate: 170 ,inset: "80% 0 0 20%" },
  ];
  const listitem = Chess.map((chess) => {
    return (
      <li key={chess.id} style={{position: "absolute",inset: `${chess.inset}`}}>
        <img 
          src={`../image/${chess.name}.svg`}
          alt=""
          style={{ rotate: `${chess.rotate}deg`, zIndex: `${chess.id}` }}
        />
      </li>
    );
  });
  console.table(listitem);
  return (
    <>
      <ul>{listitem}</ul>
    </>
  );
}
