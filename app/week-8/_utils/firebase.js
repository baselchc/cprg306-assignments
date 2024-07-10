// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpQfWp4aMzdIsHFDdqGvdM80lX22WDiW0",
  authDomain: "shoppinglist-af38a.firebaseapp.com",
  projectId: "shoppinglist-af38a",
  storageBucket: "shoppinglist-af38a.appspot.com",
  messagingSenderId: "459019232112",
  appId: "1:459019232112:web:d154c6eaaad21e4f51a5b5"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);