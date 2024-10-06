// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIuqZAZTDd7jjwfGE6D3qWtlUB8_cQLfA",
  authDomain: "react-coder-e-shop.firebaseapp.com",
  projectId: "react-coder-e-shop",
  storageBucket: "react-coder-e-shop.appspot.com",
  messagingSenderId: "733997708634",
  appId: "1:733997708634:web:3ee04c0e65d3c4d972af63",
  measurementId: "G-XWKKCJTBBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Crea una instancia de Firestore

export default db; // Exportar la instancia de Firestore para usar en otros componentes
