import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBgrp1xCaOzZvsVWq45XyQPgV7K2H817eE",
    authDomain: "todoapp-7ad1b.firebaseapp.com",
    projectId: "todoapp-7ad1b",
    storageBucket: "todoapp-7ad1b.firebasestorage.app",
    messagingSenderId: "1052406343859",
    appId: "1:1052406343859:web:7830276b0ed7c6288928c6",
    measurementId: "G-VSHE984WG3"
  };

  const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export  {db}