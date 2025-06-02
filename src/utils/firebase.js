// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP6DzaSrnfbiCzxwi7URDz0eEey_YfWN8",
  authDomain: "netflixgpt-7f5ae.firebaseapp.com",
  projectId: "netflixgpt-7f5ae",
  storageBucket: "netflixgpt-7f5ae.firebasestorage.app",
  messagingSenderId: "1086171271562",
  appId: "1:1086171271562:web:79d8c016902bcbe1f2f873",
  measurementId: "G-3FDG95PS8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();