import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8ptCyRQKJnDCACBy7yXj2tqy4naSJMME",
  authDomain: "paintingecommerce.firebaseapp.com",
  projectId: "paintingecommerce",
  storageBucket: "paintingecommerce.firebasestorage.app",
  messagingSenderId: "740694157996",
  appId: "1:740694157996:web:cdc5764db473e81df74d09",
  measurementId: "G-GGSMFD7L13"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const storage = getStorage(app); 
