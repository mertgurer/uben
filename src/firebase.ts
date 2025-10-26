import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXlXgEjJoo41W9rkMOsKobwEaNEZd56EM",
  authDomain: "uben-9ca7e.firebaseapp.com",
  projectId: "uben-9ca7e",
  storageBucket: "uben-9ca7e.firebasestorage.app",
  messagingSenderId: "239912226603",
  appId: "1:239912226603:web:2967597b065e6b2753ff6e",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth();

export { storage, db, getDownloadURL, auth };
