import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpQfWp4aMzdIsHFDdqGvdM80lX22WDiW0",
  authDomain: "shoppinglist-af38a.firebaseapp.com",
  projectId: "shoppinglist-af38a",
  storageBucket: "shoppinglist-af38a.appspot.com",
  messagingSenderId: "459019232112",
  appId: "1:459019232112:web:d154c6eaaad21e4f51a5b5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
