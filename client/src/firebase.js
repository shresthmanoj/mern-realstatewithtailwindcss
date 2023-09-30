// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realstate.firebaseapp.com",
  projectId: "mern-realstate",
  storageBucket: "mern-realstate.appspot.com",
  messagingSenderId: "561937984009",
  appId: "1:561937984009:web:72206e6974b6e7715ea6d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
