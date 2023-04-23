import { useState } from "react";

export default function page2() {
  return (
    <>
      <Page2Rfront></Page2Rfront>
    </>
  );
}
function Page2Rfront(props) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <div id="Page2" className="Eachpage">
        <div id="Circlewrapper">
          <span className="CircleLayer " id="P2_Circle1">
            <h3>
              <span>About ME</span>
            </h3>
          </span>
        </div>
        <div id="Circlewrapper">
          <span className="CircleLayer " id="P2_Circle2">
            <h3>
                元智資傳系
                <br />
                陳衍易
            </h3>
          </span>
        </div>
        <div id="Circlewrapper"
        style={{
          zIndex: isActive? `-10` : `10`,
        }}
        >
          <span className="CircleLayer" id="P2_Circle3">
            <p className="AwsomeFont">
              <br />
              {!isActive ? (
                <P2_1CirIsFront></P2_1CirIsFront>
              ) : (
                <P2_2CirIsBack></P2_2CirIsBack>
              )}
            </p>
          </span>
        </div>
        <div
          id="Circlewrapper"
          style={{
            zIndex: isActive ? `10` : `-10`,
          }}
          onClick={handleClick}
        >
          <span className="CircleLayer AwsomeFont" id="Skill">
            {isActive ? (
              <P2_2CirIsFront></P2_2CirIsFront>
            ) : (
              <P2_2CirIsBack></P2_2CirIsBack>
            )}
          </span>
        </div>
      </div>
    </>
  );
}

function P2_1CirIsFront() {
  return (
    <>
      <span style={{ fontWeight: 600 ,padding: "1em"}}>專長</span>
      <p  className="AwsomeFont">
      前端:
      切版 網頁動態效果
      <span style={{padding: "1em"}}></span>
      <br />
      後端: os/Node
      <br />
      資料庫
      <br />
      關聯式:Mysql
      </p>
    </>
  );
}
function P2_2CirIsBack() {
  return (
    <>
      P
      <br />
      R
      <br />
      E
      <br />
      S
      <br />S
    </>
  );
}
function P2_2CirIsFront() {
  return (
    <>
      <div id="P2_4Cir">
        <div>
          <img src="/image/VecHtml.svg" alt="" />
        </div>
        <div style={{transform: "translate(0)"}}>
          <p>
            LAYOUT: Grid/Flex  RWD
          </p>
        </div>
        <div>
          <img src="/image/VecJs.svg" alt="" />
        </div>
        <div>
          <p>
          DOM Api
          </p>
        </div>
        <div style={{gridArea: "nine"}}>
          <img src="/image/Vecnode.svg" alt="" />
        </div>
        <div>
          <p>
            event loop
            <br />
            express server/Route
          </p>
        </div>
      </div>
    </>
  );
}
