import { Component, useState } from 'react'
import './style.css';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3'
import Page4 from './page4'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">
      <Page1></Page1>
      <Page2></Page2>
      <Page3></Page3> 
      <Page4></Page4>
    </div>
  )
}

export default App
