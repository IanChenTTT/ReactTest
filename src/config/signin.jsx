import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import App from "../App";
export default function SignIn() {
    const [value,setValue] = useState('');
   const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setValue(user.email)
        localStorage.setItem("email",user.email)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  useEffect(()=>{
    setValue(localStorage.getItem("email"));
  })
  return (
    <>
      {console.log(value)}
      {value?<App/>:
      <button onClick={handleClick}>Click</button>
      }
    </>
  );
}
