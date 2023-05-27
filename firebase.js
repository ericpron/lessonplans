import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjwEFrmK1zsKUqJXarRrkTooJgpmNowEc",
    authDomain: "lessonplans-16038.firebaseapp.com",
    projectId: "lessonplans-16038",
    storageBucket: "lessonplans-16038.appspot.com",
    messagingSenderId: "506584526305",
    appId: "1:506584526305:web:f2a444b8be7ecf2306b6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
