import { useContext, useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import data from "./data/stats.json";
import { Routes, Route, Navigate } from "react-router-dom";

import BuyACar from "./components/BuyACar";
import Login from "./components/Login";
import LoginContext from "./loginContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [stats, setStats] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const {isLoggedIn} = useContext(LoginContext)
  console.log('is user logged in? ' + isLoggedIn)

  // useEffect(() => {
  //   if(isLoggedIn === true) {
  //     <Navigate to='/bac'/>
  //   } else {
  //     console.log('this is false but the use effect has worked');
  //   }
  // }, [isLoggedIn])
  

  return (
    <div className="App">
      <ProtectedRoute >
      {isLoggedIn && 
      <>
      <Nav stats={stats}  />
      <BuyACar stats={stats} setStats={setStats} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
}
      </ProtectedRoute>
      <Routes>
        <Route  exact path="/" element={<Login  />} />
      </Routes>
      
    
        
     
    </div>
  );
}

export default App;
