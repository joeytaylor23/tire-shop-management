// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjM-BzEyns1Y09zVFlDluuKtcXlyHmr9E",
    authDomain: "tire-shop-inventory-9a65c.firebaseapp.com",
    projectId: "tire-shop-inventory-9a65c",
    storageBucket: "tire-shop-inventory-9a65c.firebasestorage.app",
    messagingSenderId: "654195598305",
    appId: "1:654195598305:web:17059ad10de03b1e0068a0"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
