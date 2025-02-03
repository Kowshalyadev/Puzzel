import React, { useState } from "react";
import "./loginPages.css";
import{app} from "./firebase";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login(){
    let route=useNavigate()
    let loginwithFireBase=getAuth(app)
    const [email,setEmail]=useState("");
    const [pswd,setPswd]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // console.log("Login Successful:", { email, pswd });
        try{
            let loginSuccess=await signInWithEmailAndPassword(loginwithFireBase,email,pswd);
            if(loginSuccess){
                // console.log(loginSuccess)
                alert("logged successfully");
                route("/");
                console.log(loginSuccess)
            }
            else{
                alert("user not found");

            }

        }
        catch(err){
            console.log(err)
           alert(err)
        }
        setEmail("")
        setPswd("")
    
    }
    return(<>
     <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="enter email here" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder="enter password here" onChange={(e)=>setPswd(e.target.value)} value={pswd}/>
        <button type="submit">Login</button>
        </form>
    </>)
}
export default Login;