import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACDbGu-1Z25BQ44BVE8Kr-oHMbgHBt9mQ",
  authDomain: "netflix-8b8f5.firebaseapp.com",
  projectId: "netflix-8b8f5",
  storageBucket: "netflix-8b8f5.appspot.com",
  messagingSenderId: "211475307740",
  appId: "1:211475307740:web:fc7fc05b01b655779ce819"
};

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


