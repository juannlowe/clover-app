// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARw3rmoolgJJgh_pDJ5nMQjjHVbzxKGL8",
  authDomain: "clover-app-ee45d.firebaseapp.com",
  projectId: "clover-app-ee45d",
  storageBucket: "clover-app-ee45d.appspot.com",
  messagingSenderId: "902257113406",
  appId: "1:902257113406:web:2dfae01abb2f5b264f146f",
  measurementId: "G-29ZVZ6RN75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);