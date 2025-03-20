import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkzJkIb-c7pA2JBq93GMm6Fo5zKplT4l4",
  authDomain: "dimensional-art.firebaseapp.com",
  projectId: "dimensional-art",
  storageBucket: "dimensional-art.firebasestorage.app",
  messagingSenderId: "507623106800",
  appId: "1:507623106800:web:32d28b224a6c34681b7a35"
};

export const app = initializeApp(firebaseConfig);