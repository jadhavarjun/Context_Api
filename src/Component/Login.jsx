import React, { useState, useContext } from "react";
import { LoginContext } from '../Context/LoginContext';

export default function Login() {
   const { setUserName, setShowProfile } = useContext(LoginContext);
    
    return (
        <>
            <input
                type="text"
                placeholder="UserName"
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
            />
                
            <input type="text" placeholder="Password" />
            
            <button
                onClick={() => {
                    setShowProfile(true);
                }}
            >
                LOGIN
            </button>
            {/* {showProfile && <h1>{username}</h1>} */}

        </>
    )
}