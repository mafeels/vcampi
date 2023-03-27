import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpVrP-_d_pdumM4CTDYtD-RTV7l06_0yI",
  authDomain: "vcampi-unicamp.firebaseapp.com",
  projectId: "vcampi-unicamp",
  storageBucket: "vcampi-unicamp.appspot.com",
  messagingSenderId: "931384752148",
  appId: "1:931384752148:web:947ecb117bf164a3ce0f01",
  measurementId: "G-E6YX2YTEBQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);