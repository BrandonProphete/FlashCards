// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/analytics";
import{ getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmKrXxISRf8V9YV9Xdp7OSFlGBCY-vx90",
  authDomain: "flashcards-bcf2d.firebaseapp.com",
  projectId: "flashcards-bcf2d",
  storageBucket: "flashcards-bcf2d.appspot.com",
  messagingSenderId: "1037432414828",
  appId: "1:1037432414828:web:892dc6db6c2f84b9802e49",
  measurementId: "G-JN80003MZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};