// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVZ8nuyfe82ecYezA9IITvytYH3WvoR_E",
  authDomain: "super-easy-4bdd9.firebaseapp.com",
  projectId: "super-easy-4bdd9",
  storageBucket: "super-easy-4bdd9.appspot.com",
  messagingSenderId: "865644461152",
  appId: "1:865644461152:web:841ab7bdd1e7a242265705",
  measurementId: "G-B8WQJ5XBZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
