import React, { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import{getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase"
function Signup() {
  const signUpDoneWithFb=getAuth(app)
  const route = useNavigate();
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    route("/login"); // Navigate to the login page
    try{
      let a=await createUserWithEmailAndPassword(signUpDoneWithFb,email,pswd);
      console.log(a);
    }
    catch(err){
      console.log(err)
    }
    setEmail("");
    setPswd("");
  };

  return (
    <>
      <h1>SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter password here"
          onChange={(e) => setPswd(e.target.value)}
          value={pswd}
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default Signup;
