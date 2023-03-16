import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"; 

const firebaseConfig = { 
  apiKey : "AIzaSyCJod2GdM7m23YkYp7fuG6r4tuBLmnkivo" , 
  authDomain : "domino-s-c905e.firebaseapp.com" , 
  projectId : "domino-s-c905e" , 
  storageBucket : "domino-s-c905e.appspot.com" , 
  mesajlaşmaSenderId : "630275803859" , 
  appId : "1:630275803859:web:08a39f6a2c492b4be4a226" 
};

export const app = initializeApp( firebaseConfig );
export const auth = getAuth(app);