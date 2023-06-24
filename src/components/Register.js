import React, { useState } from 'react'

export default function Register() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [reg,setReg]=useState(false);
  return (
    <>
    {!reg && 
    <>
    <div className="headlogin">
        <h1>Shiksha</h1>
        <h1>Register</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            console.log({ username, password });
            setReg(true);
          }}
        >
          Submit
        </button>
      </div>
    </>
    }
    {reg && 
    <>
    <div className="headlogin">
      <h1>Registration Successful</h1>
      <h3>Your Account is Created. <br /> Sign in to view Courses.</h3>
    </div>
    </>
    }
    </>
  )
}
