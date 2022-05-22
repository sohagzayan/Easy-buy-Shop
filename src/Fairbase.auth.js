import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCb294efBdtfnlx9v1AejU8nCsf1cxnMsk",
    authDomain: "assinment-12-6ac8f.firebaseapp.com",
    projectId: "assinment-12-6ac8f",
    storageBucket: "assinment-12-6ac8f.appspot.com",
    messagingSenderId: "336382263608",
    appId: "1:336382263608:web:83a354afa24191b29501cd"
};

const app = initializeApp(firebaseConfig);
export  const auth  = getAuth(app)
export default app