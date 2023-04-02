import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFjIwQKb4tQBoWNay44-TWFPkWi9S4q7Y",
  authDomain: "kir-sense.firebaseapp.com",
  projectId: "kir-sense",
  storageBucket: "kir-sense.appspot.com",
  messagingSenderId: "1005732037209",
  appId: "1:1005732037209:web:cac7728c2600bc9246a748",
  measurementId: "G-DBL070589H"
};

initializeApp(firebaseConfig);

const db = getFirestore();
