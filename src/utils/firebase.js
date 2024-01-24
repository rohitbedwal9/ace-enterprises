import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZ0ZWeMszDg7BpgTOdokWm2-4QbhOhdXM",
    authDomain: "ace-enterprises-af30e.firebaseapp.com",
    databaseURL: "https://ace-enterprises-af30e-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "ace-enterprises-af30e",
    storageBucket: "ace-enterprises-af30e.appspot.com",
    messagingSenderId: "786180729683",
    appId: "1:786180729683:web:d7476db935e125479a4fa6",
    measurementId: "G-RXZV5MYNZ9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
