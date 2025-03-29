import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";
const firebaseConfig = {

    apiKey: "AIzaSyCliPhppHfLaIoAGJVLS9tP92k3hNDXEGM",
  
    authDomain: "amura-e2782.firebaseapp.com",
  
    projectId: "amura-e2782",
  
    storageBucket: "amura-e2782.firebasestorage.app",
  
    messagingSenderId: "477853533726",
  
    appId: "1:477853533726:web:73ee51f766e25808fe500f",
  
    measurementId: "G-VLFMY86398"
  
  };
  
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
  signOut
};