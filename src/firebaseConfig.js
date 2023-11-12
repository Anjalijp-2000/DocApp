import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZkPvjrwkIxicFDMcrMDD702fSZBT6vb4",
    authDomain: "docapp-8f163.firebaseapp.com",
    projectId: "docapp-8f163",
    storageBucket: "docapp-8f163.appspot.com",
    messagingSenderId: "40806102455",
    appId: "1:40806102455:web:57c700b082c6c1423de432"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)