// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTFZrQZPk5EkFzgb_I4JHiAoAxERYCGpo",
  authDomain: "myportfolio-5f19c.firebaseapp.com",
  projectId: "myportfolio-5f19c",
  storageBucket: "myportfolio-5f19c.appspot.com",
  messagingSenderId: "1006555082485",
  appId: "1:1006555082485:web:75743b485beb5edd7c9fbc",
  measurementId: "G-43YFCYCHCG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'it';
export {auth,provider}