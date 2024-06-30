// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA50_JhO_US2-TY-VCeCia_AzmVeKTTixU",
  authDomain: "registration-fabc3.firebaseapp.com",
  projectId: "registration-fabc3",
  storageBucket: "registration-fabc3.appspot.com",
  messagingSenderId: "548904830109",
  appId: "1:548904830109:web:8916dcde87ea48d78f4074",
  measurementId: "G-5BHL7VSPXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth,app}