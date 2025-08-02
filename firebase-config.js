// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAitTeXucaql6jlp5K8OWFqioDc7v2wi48",
  authDomain: "notes-f5ef8.firebaseapp.com",
  projectId: "notes-f5ef8",
  storageBucket: "notes-f5ef8.firebasestorage.app",
  messagingSenderId: "89059717516",
  appId: "1:89059717516:web:9687b741abc3a65816a6a9",
  measurementId: "G-9RYE98FCN5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
