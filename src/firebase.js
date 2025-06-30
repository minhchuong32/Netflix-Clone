// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANlGzVS2mKmwBc_W3g85rqxGA4fpJ9iTY",
  authDomain: "netflix-clone-1824e.firebaseapp.com",
  projectId: "netflix-clone-1824e",
  storageBucket: "netflix-clone-1824e.firebasestorage.app",
  messagingSenderId: "421901054616",
  appId: "1:421901054616:web:ae321889de1c7c285ad6ed",
  measurementId: "G-XLER4ZG5MY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await addDoc(collection(db, "users"), {
      uid: userCredential.user.uid,
      name: name,
      authProvider: "local",
      email: email,
    });

    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    toast.error(
      "Error signing up: " + error.code.split("/")[1].replace(/-/g, " ")
    );

    throw error; // Re-throw the error to handle it in the calling function
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error logging in:", error);
    toast.error(
      "Error logging in: " + error.code.split("/")[1].replace(/-/g, " ")
    );
  }
};

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
      toast.error(
        "Error signing out: " + error.code.split("/")[1].replace(/-/g, " ")
      );
    });
};

export { auth, db, signup, login, logout };
