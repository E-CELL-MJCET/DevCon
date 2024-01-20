import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTapHCVPNKw4TLh31lM4n0-BwM6erUbAQ",
    authDomain: "devcon-8da26.firebaseapp.com",
    projectId: "devcon-8da26",
    storageBucket: "devcon-8da26.appspot.com",
    messagingSenderId: "184886876458",
    appId: "1:184886876458:web:653066fa4c6d6a888ba653"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);