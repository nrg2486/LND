// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtLWp-SVe0q3DmbVfAAJyNOKrKGkwFrL8",
  authDomain: "spacely-84af7.firebaseapp.com",
  databaseURL: "https://spacely-84af7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spacely-84af7",
  storageBucket: "spacely-84af7.appspot.com",
  messagingSenderId: "715034147834",
  appId: "1:715034147834:web:82d44aca0a30ddef3ac243",
  measurementId: "G-WJLETR7BVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;