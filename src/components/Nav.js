import React, { useContext } from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import LoginContext from "../loginContext";



function Nav({stats}) {
  
  const {setIsLoggedIn} = useContext(LoginContext)

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        setIsLoggedIn(false)
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="top-nav">
      <div className="center-nav">
        <div className="nav-card">
          <p>{stats.userName}</p>
        </div>
        <div className="nav-card">
          <p>Car: {stats.car}</p>
        </div>
        <div className="nav-card">
          <p>Fuel:{stats.fuel}</p>
        </div>
        <div className="nav-card">
          <p>Money: ${stats.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <div className="nav-card">
          <p>Rank: {stats.rank}</p>
        </div>
      </div>
      <button onClick={handleClick}>sign out</button>
      <img
        className="profile-im"
        alt="profile-pic"
        src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
      />
    </div>
  );
}

export default Nav;
