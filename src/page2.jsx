import { useState } from "react";

export default function Page2() {
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
              <span>
                元智資傳系
                <br />
                陳衍易
              </span>
            </h3>
          </span>
        </div>
        <div id="Circlewrapper">
          <span className="CircleLayer" id="P2_Circle3">
            <p className="AwsomeFont">
              <br />
              {!isActive ? <P2_1CirIsFront></P2_1CirIsFront> :
               <P2_2CirIsBack></P2_2CirIsBack>};
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
          <div className="CircleLayer AwsomeFont">
               {isActive? <P2_2CirIsFront></P2_2CirIsFront>
           : <P2_2CirIsBack></P2_2CirIsBack>};
          </div>
        </div>
      </div>
    </>
  );
}


function P2_1CirIsFront() {
  return (
    <>
    <span style={{ fontWeight: 600 }}>專長</span>
      <br />
      前端:
      <br />
      從html/css 到 JS
      <br />
      JS/ES7 到 react JS
      <br />
      伺服器:
      <br />
      NodeJS+Express/php+Apache
      <br />
      資料庫
      <br />
      Mysql; 
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
function P2_2CirIsFront(){
return(
  <>
  <div  id="P2_4Cir">
    <div style={{gridArea: 1}}>

    </div>

  </div>
  </>
)
}
