export default function Page1(){
   return(
    <div id="Page1">
        {/* <div className="CircleLayer"></div> */}
        <span className="CircleLayer"></span>
    </div>
   ); 
}
function CircleLayer({size,layer}){
   return(
      <div className="CircleLayer" style={{
         zIndex: layer,
      }}></div>
   )
}