// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl3XOAB5IVQryYZVcfRGKib_vr5YNFHQc",
  authDomain: "digital-shield-5acb0.firebaseapp.com",
  projectId: "digital-shield-5acb0",
  storageBucket: "digital-shield-5acb0.firebasestorage.app",
  messagingSenderId: "49099182000",
  appId: "1:49099182000:web:9f4c7095b7ce33462ed075",
  measurementId: "G-8WNPT1N46F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };