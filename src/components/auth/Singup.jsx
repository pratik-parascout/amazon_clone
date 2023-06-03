import { useState } from "react";
import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";

const Signup= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const singUp = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential)
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="m-40 h-80 w-80 border-solid border-2 border-black p-14 bg-slate-200">
      <form onSubmit={singUp}>
        <h2 className="p-2 px-10">Create Account</h2>
        <input className="my-4 p-1" type="email"  placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="my-4 p-1" type="password" placeholder="Password Here" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button className="btn" type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
