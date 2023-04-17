import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();

  function anmelden(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function einlogen(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function auslogen() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //onAuthStateChanged met a jour le user en cours, actuel en question pour le passer au state en ligne 7 "currentUser"
      setCurrentUser(user);
    });

    return unsubscribe;
  });

  return (
    <AuthContext.Provider value={{ currentUser, anmelden, einlogen, auslogen }}>
      {props.children}
    </AuthContext.Provider>
  );
}
