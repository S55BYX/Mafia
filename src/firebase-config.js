// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV5ba6hm46nu_ivmjOq6WcXl-WyPGjaGA",
  authDomain: "mafia-4247f.firebaseapp.com",
  projectId: "mafia-4247f",
  storageBucket: "mafia-4247f.appspot.com",
  messagingSenderId: "870607285900",
  appId: "1:870607285900:web:6dcd7cfc55280eaefdd5a9",
  measurementId: "G-HXK5LXWLPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
        console.log(result)
        
        const name = result.user.displayName;
        const email = result.user.email;
        const profileURL = result.user.photoURL;

        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('profileURL', profileURL)

    }).
    catch((error) => {
        console.log(error)
    })
}