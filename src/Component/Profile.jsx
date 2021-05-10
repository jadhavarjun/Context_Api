import React, { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';


export default function Profile(){
    const { username } = useContext(LoginContext);
    return(
        <>
        <h1> Profile </h1>
        <h2>UserName: {username}</h2>
        </>
    );
}