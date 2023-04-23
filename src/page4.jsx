import getRandomInt from "./util/MathFunction";
import { useState } from "react";
import { db } from "./firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
export default function page4({ scroll }) {
 
  return (
    <>
      <div id="Page4" className="Eachpage">
        <div id="Circlewrapper">
          <div className="CircleLayer">
            <span
              className="OuterLayer OuterLayerAnim"
              style={{
                animationDuration: `15000ms`,
                "--degree": `${getRandomInt(0, 90)}deg`,
                scale: "1.4",
                zIndex: "-15",
              }}
            ></span>
            <span
              className="OuterLayer OuterLayerAnim"
              style={{
                animationDuration: `15000ms`,
                "--degree": `${getRandomInt(0, 90)}deg`,
                scale: "1.5",
                zIndex: "-16",
              }}
            ></span>
            <Myform></Myform>
          </div>
        </div>
      </div>
    </>
  );
}
export function Myform() {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (even) => {
    even.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        message: message,
      }).then(()=>{
        alert("Your Message has been subitted")
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      alert("Error adding document")
      console.error("Error adding document: ", e);
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <form className="form AwsomeFont" onSubmit={handleSubmit}>
        <label id="name">name</label>
        <input type="text" placeholder="name" id="name" 
        value={name} onChange={(e)=>{setName(e.target.value)}} required />
        <label id="Email">Email</label>
        <input type="email" placeholder="email" id="email" value={email}
        onChange={(e)=>{setEmail(e.target.value)}} required />
        <label>Message</label>
        <textarea
          name="textareaP4"
          id="textareaP4"
          placeholder="Message to me"
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
        ></textarea>
        <input type="submit" value="Submit" id="Submit" />
      </form>
    </>
  );
}
