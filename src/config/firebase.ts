// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWMJfh5wrDxoVuFrvLldHSHCEgh42wFks",
  authDomain: "scan-the-lie-cba00.firebaseapp.com",
  projectId: "scan-the-lie-cba00",
  storageBucket: "scan-the-lie-cba00.firebasestorage.app",
  messagingSenderId: "418582353520",
  appId: "1:418582353520:web:7d7ce17faaee4cc4fe06b5",
  measurementId: "G-JXCV582R81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Export these for the rest of the project
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
