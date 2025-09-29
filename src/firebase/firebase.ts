import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLQjd8D3s7Y4qF08pAgpJu8eQEyCiSYgM",
  authDomain: "weather-app-6af2a.firebaseapp.com",
  projectId: "weather-app-6af2a",
  storageBucket: "weather-app-6af2a.firebasestorage.app",
  messagingSenderId: "1071000962043",
  appId: "1:1071000962043:web:7db75b0b3a2f44e33fc15e",
  measurementId: "G-Q5JNT5FXP0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
