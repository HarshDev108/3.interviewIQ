
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "assessnce.firebaseapp.com",
  projectId: "assessnce",
  storageBucket: "assessnce.firebasestorage.app",
  messagingSenderId: "146865203445",
  appId: "1:146865203445:web:803c62ac8f53697ace7dbc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}