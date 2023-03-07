import React, { useContext, useEffect, useState } from "react";
import { signInWithGoogle, auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import LoginContext from "../loginContext";
import { Navigate } from "react-router-dom";

function Login(props) {

  const {setIsLoggedIn, isLoggedIn} = useContext(LoginContext)

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      //do your logged in user stuff here -- this where the context needs to update to switch false to true 
      setIsLoggedIn(true);
      isLoggedIn && <Navigate to='/bac' />
    } else {
      console.log(false);
    }
  });


  return (
    <div>
      {isLoggedIn && <Navigate to='/bac' />}
      <div className="login-container">
        <h1>Welcome to Mafia</h1>
        <button onClick={signInWithGoogle} className="modal-button">
          Press to Login
        </button>
      </div>
    </div>
  );
}

export default Login;
