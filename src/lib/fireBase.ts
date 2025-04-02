// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgygzMFzCLpm7Uq_ul1TaHd_XdaajFzPE",
  authDomain: "e-commerc-6a35d.firebaseapp.com",
  projectId: "e-commerc-6a35d",
  storageBucket: "e-commerc-6a35d.firebasestorage.app",
  messagingSenderId: "6015796816",
  appId: "1:6015796816:web:c4aac1ffea534021a17355",
  measurementId: "G-KB72WPGZ6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth};
