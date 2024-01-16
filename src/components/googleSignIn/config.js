import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
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
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth, provider};