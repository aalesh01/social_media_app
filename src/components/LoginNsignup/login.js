import React, { useEffect, useState } from 'react'
import "./signup.css"
import profile from "./uid.png";
const Login = () => {
  const [user , setUser] = useState([])
    


   

  useEffect( ()=>{
       fetch(`http://localhost:8080/users`)
       .then (res=>res.json())
       .then (res=>setUser(res))
       console.log(user);
  }, []);

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
                <h3 className="loginLogo">Social Tree</h3>
                <span className="loginDesc">connect with friends and the world around you :D</span>
            </div>
        <div className="loginRight">
        <div className="loginBox">
        <div className="imgs">
                <div className="img-container">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
          
            <input placeholder="Email"  type="email"  required className="loginInput" />
            <input placeholder="Password"  type="password" className="loginInput" />
            <button  className="loginButton">Log In</button><br></br>
            <span className="loginForgot">Forgot Password?</span><br></br>
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