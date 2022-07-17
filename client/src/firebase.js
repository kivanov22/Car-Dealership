// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtmc8WuvGPGVhdzoBAe94vFzItzaf6xKM",
  authDomain: "car-dealership-62e7a.firebaseapp.com",
  projectId: "car-dealership-62e7a",
  storageBucket: "car-dealership-62e7a.appspot.com",
  messagingSenderId: "282465581445",
  appId: "1:282465581445:web:8282ff40091a7dac7eacec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const db = getFirestore(app);