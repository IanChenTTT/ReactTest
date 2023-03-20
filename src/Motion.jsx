import getRandomInt from "./MathFunction";

//  This Part is changing rotate angle variable
export default  function CircleRot() {
const CircleList = document.getElementsByClassName("OuterLayer")
Array.from(CircleList).forEach(ele=>{
    
    ele.setAttribute("style", `--degree: ${getRandomInt(0,360)}deg`);;
})
}