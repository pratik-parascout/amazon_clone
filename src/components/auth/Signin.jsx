import { useState } from "react";
import React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import Signup from "./Singup";
import AuthDetails from "./AuthDetails";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    
    <div className="m-40 h-80 w-80 border-solid border-2 border-black p-14 bg-slate-200">
      <form onSubmit={signIn} >
        <h2 className="p-2 px-20">Log In</h2>
        <input className="my-4 p-1" type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="my-4 p-1" type="password" placeholder="Password Here" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn" type="submit">Log In</button>
      </form>
      </div>

  )
}

export default Signin
