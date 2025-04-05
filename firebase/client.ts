/*import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaFcmKp1ULlrN6Q6onlmMoNFBvf49Aui0",
  authDomain: "prepwise-de047.firebaseapp.com",
  projectId: "prepwise-de047",
  storageBucket: "prepwise-de047.firebasestorage.app",
  messagingSenderId: "880549251661",
  appId: "1:880549251661:web:96c0ce436018b5ac906a04",
  measurementId: "G-JVFSJEQ6JC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app); 

*/

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore"; // Use `initializeFirestore` instead of `getFirestore`

const firebaseConfig = {
  apiKey: "AIzaSyCaFcmKp1ULlrN6Q6onlmMoNFBvf49Aui0",
  authDomain: "prepwise-de047.firebaseapp.com",
  projectId: "prepwise-de047",
  storageBucket: "prepwise-de047.firebasestorage.app",
  messagingSenderId: "880549251661",
  appId: "1:880549251661:web:96c0ce436018b5ac906a04",
  measurementId: "G-JVFSJEQ6JC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with `ignoreUndefinedProperties`
export const db = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});

export const auth = getAuth(app);