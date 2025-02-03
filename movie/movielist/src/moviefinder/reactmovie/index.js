import React, { useEffect, useState } from "react";
import Signup from "./signupPage";
import Login from "./loginPages";
import Home from "./home";

// import {app} from "./firebase"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getAuth,onAuthStateChanged } from "firebase/auth";
function MovierFinderApp() {
    const authorize=getAuth()
    const[userLoggedIn,setLoggedIn]=useState(null);
    useEffect(()=>{
      let a=onAuthStateChanged(authorize,(e)=>{
        console.log(a)
        if(e){
            setLoggedIn(true)
        }else{
            setLoggedIn(false)
        }

      })
        
    },[authorize])
    return (
        <>
    
        
        <BrowserRouter>
        <Routes>
        <Route path="/" element={userLoggedIn?<Home />:<Navigate to="/login"/>} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={userLoggedIn?<Navigate to="/"/>:<Login/>} /> 
        </Routes>
        </BrowserRouter> 
        </>
    );
}

export default MovierFinderApp;
