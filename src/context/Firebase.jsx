import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBQugGmiIurePqkQQJVRwJz1RajXFGiJtw",
  authDomain: "resume-generator-e00af.firebaseapp.com",
  databaseURL: "https://resume-generator-e00af-default-rtdb.firebaseio.com",
  projectId: "resume-generator-e00af",
  storageBucket: "resume-generator-e00af.appspot.com",
  messagingSenderId: "508687286177",
  appId: "1:508687286177:web:b4b4c85b7fb16073a155e0",
  measurementId: "G-SG85TGMKYP"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

const FirebaseContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, Password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, Password);
  };

  const signinUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(firebaseAuth, provider);
  };

  const logout = () => {
    return signOut(firebaseAuth);
  };

  const putData = (coll, data) => {
    return addDoc(collection(db, coll), data);
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // Yes, user is logged in
        setUser(user);
      } else {
        // User is logged out
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        loginWithGoogle,
        putData,
        logout,
        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
