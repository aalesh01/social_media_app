import React, { useEffect, useState } from 'react'

const Login = () => {
  const [user , setUser] = useState([])
    
 const getUser = ()=>{
       fetch(`http://localhost:8080/users`)
       .then (res=>res.json())
       .then (res=>setUser(res))
       console.log(user);
  }

  useEffect(getUser, []);

  const handleSubmit = async (event) => {
      console.log(user)
      await fetch(`http://localhost:8080/users`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "content-type": "application/json" }
      })
      console.log(user)
      alert("Sign up Successfull");
  }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Socilia</h3>
                <span className="loginDesc">connect with friends and the world around you Socilia.</span>
            </div>
        <div className="loginRight">
        <div className="loginBox">
            <input placeholder="Email"  type="email"  required className="loginInput" />
            <input placeholder="Password"  type="password" className="loginInput" />
            <button  className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button  className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login