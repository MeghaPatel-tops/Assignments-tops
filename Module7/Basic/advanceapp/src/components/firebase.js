import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAeGQV9MYRitkquVM0hvsXjyVWDEhnEqoU",
  authDomain: "usermanagement-7e7c3.firebaseapp.com",
  projectId: "usermanagement-7e7c3",
  storageBucket: "usermanagement-7e7c3.firebasestorage.app",
  messagingSenderId: "662695111879",
  appId: "1:662695111879:web:61780860c22e46513222e2",
  measurementId: "G-HV5SG1SWNQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export  {db};