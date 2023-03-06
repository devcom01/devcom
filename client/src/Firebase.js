// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider,GithubAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC20TW66O_0SnKgEiGovSUts7XE4jAS1uo",
  authDomain: "developer-5070e.firebaseapp.com",
  projectId: "developer-5070e",
  storageBucket: "developer-5070e.appspot.com",
  messagingSenderId: "148032747998",
  appId: "1:148032747998:web:5ae48a7a62184be1c8054f",
  measurementId: "G-Q1Z0MGKXEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider=new GoogleAuthProvider();
export const providergit=new GithubAuthProvider();
export const storage = getStorage(app);

