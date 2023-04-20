import { CircleLayer } from "./Page1";
export default function page4() {
  return (
    <>
      <div id="Page4" className="Eachpage">
        <div id="Circlewrapper">
          <div className="CircleLayer">
            <Myform></Myform>
            <CircleLayer size={2} layer={-100}></CircleLayer>
          </div>
        </div>
      </div>
    </>
  );
}
function Myform() {
  return (
    <>
        <h3>Contact me</h3>
      <form className="form AwsomeFont" >
        <label id="name">name</label>
        <input type="text" placeholder="name" id="name" required />
        <label id="Email">Email</label>
        <input type="email" placeholder="email" id="name" required />
        <label>Message</label>
        <textarea
          name="textareaP4"
          id="textareaP4"
          cols="40"
          rows="5"
          placeholder="Message to me"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      ;
    </>
  );
}
