// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqPFkMGTG4PewlMPYmB_f2hQUGBV_OcsI",
  authDomain: "netwatchgpt.firebaseapp.com",
  projectId: "netwatchgpt",
  storageBucket: "netwatchgpt.appspot.com",
  messagingSenderId: "354516221164",
  appId: "1:354516221164:web:41bfeaa8d3f208cda7b9c9",
  measurementId: "G-TRME50W7CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()