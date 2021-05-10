import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Profile from './Component/Profile';
import React, { useState } from "react";
import { LoginContext } from './Context/LoginContext';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUserName] = useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUserName, setShowProfile }}>
      {showProfile ? <Profile/> : <Login/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
