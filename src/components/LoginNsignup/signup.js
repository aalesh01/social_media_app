import React, { useState } from 'react'
import "./signup.css"


const Signup = () =>{

    const [user , setUser] = useState()

    return (
       
        <>
         <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social Tree</h3>
                <span className="loginDesc">connect with friends and the world around you :D</span>
            </div>
        <div className="loginRight">
        <div className="loginBox">
            <form>
            <input placeholder="Fullname" type="text" name='fullname' className="loginInput" />
            <input placeholder="Email" type="email" name='email' className="loginInput" />
            <input placeholder="Password" type="password" name='password' className="loginInput" />
            <input placeholder="Phone no.." type="tel" name='date' className="loginInput" /><br></br>
            <input placeholder='DOB'type="Date" name='dateofbirth' className='loginInput'/><br></br>
            <button className="loginButton">Sign Up</button>
            <button  className="loginRegisterButton">
            Log into Account
            </button></form>
            
          </div>
        </div>
      </div>
    </div>
        
        </>

      );}

export default Signup