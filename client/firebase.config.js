// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRoD70ievK-m0z_Ov6Y6FuYSVPEftTVRY",
  authDomain: "healthvault-df4f1.firebaseapp.com",
  projectId: "healthvault-df4f1",
  storageBucket: "healthvault-df4f1.appspot.com",
  messagingSenderId: "857238722592",
  appId: "1:857238722592:web:c1a335b388e4acbb2f0445",
  measurementId: "G-FN44KCRJYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);