// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGgFVd3NExqz47yAblbTpuuRTxvb1rPDs",
  authDomain: "clone-b0381.firebaseapp.com",
  projectId: "clone-b0381",
  storageBucket: "clone-b0381.appspot.com",
  messagingSenderId: "159378962050",
  appId: "1:159378962050:web:b148444586d648aa47269b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)