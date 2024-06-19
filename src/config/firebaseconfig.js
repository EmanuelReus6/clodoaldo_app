// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, deleteDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHtAAPphfrBEoPKJJThMWyWjkF3S8uOrk",
  authDomain: "clodoaldo-97bdc.firebaseapp.com",
  projectId: "clodoaldo-97bdc",
  storageBucket: "clodoaldo-97bdc.appspot.com",
  messagingSenderId: "941391367184",
  appId: "1:941391367184:web:41547567721e59360dce95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const auth = getAuth(app)

export { database, collection, doc, deleteDoc, auth, onAuthStateChanged };