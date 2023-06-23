// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzms1kfMbPI1LE_e8xYMfNKXiiWsyijmE",
  authDomain: "stmoseshighschool-9ec40.firebaseapp.com",
  projectId: "stmoseshighschool-9ec40",
  storageBucket: "stmoseshighschool-9ec40.appspot.com",
  messagingSenderId: "159542979312",
  appId: "1:159542979312:web:ec9a6b143aaa372377f035",
  measurementId: "G-M78PRHGXVN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)
