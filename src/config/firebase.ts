// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);