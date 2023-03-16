// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider,GithubAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider=new GoogleAuthProvider();
export const providergit=new GithubAuthProvider();
export const storage = getStorage(app);

