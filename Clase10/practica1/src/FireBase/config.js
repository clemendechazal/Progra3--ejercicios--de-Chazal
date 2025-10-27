import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA8gXohVepLhEG1woozHKFCT5dXhsdIciM",
  authDomain: "proyectofirebase-de-chazal.firebaseapp.com",
  projectId: "proyectofirebase-de-chazal",
  storageBucket: "proyectofirebase-de-chazal.firebasestorage.app",
  messagingSenderId: "216910260114",
  appId: "1:216910260114:web:806462f5241ca688dd034b"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const storage = app.storage()
export const db = app.firestore()
