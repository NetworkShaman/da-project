// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQfP9n7FYXDZ2tlBbMxyGxFOX6mY8pd2o",
    authDomain: "da-project-xskvorts.firebaseapp.com",
    projectId: "da-project-xskvorts",
    storageBucket: "da-project-xskvorts.firebasestorage.app",
    messagingSenderId: "685295731413",
    appId: "1:685295731413:web:a2615f76d44e7f385d985c",
    measurementId: "G-9PRNJNJRHL"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };