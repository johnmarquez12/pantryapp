// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdASK2bqsrHjZ0X8AkEXDDZ89MB1c_ALE",
  authDomain: "pantry-app-96cf4.firebaseapp.com",
  projectId: "pantry-app-96cf4",
  storageBucket: "pantry-app-96cf4.appspot.com",
  messagingSenderId: "310417161133",
  appId: "1:310417161133:web:b78942d845d9c9ec36bf24",
  measurementId: "G-WTDMXPYZQX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
