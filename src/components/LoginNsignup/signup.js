import React, { useState } from 'react'
import "./signup.css"


const Signup = () =>{

    const [user , setUser] = useState([])
    
    const handleForm= (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        console.log(user)
        await fetch(`http://localhost:8080/users`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
        alert("Sign up Successfull");
    }

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
            <input onChange={handleForm} placeholder="Fullname" type="text" name='name' className="loginInput" />
            <input onChange={handleForm} placeholder="Email" type="email" name='email' className="loginInput" />
            <input onChange={handleForm} placeholder="Password" type="password" name='password' className="loginInput" />
            <input onChange={handleForm} placeholder="Phone no.." type="tel" name='phone' className="loginInput" /><br></br>
            <input onChange={handleForm} placeholder='Gender' type="text" name='gender' className='loginInput'/><br></br>
            <input onChange={handleForm} placeholder='DOB' type="Date" name='dob' className='loginInput'/><br></br>
            <input onChange={handleForm} placeholder='image' name='image' className='loginInput'/><br></br>

            <button onClick={()=>handleSubmit()} className="loginButton">Sign Up</button>
            <button  className="loginRegisterButton">
            Log into Account
            </button> </form>
            
          </div>
        </div>
      </div>
    </div>
        
        </>

      );}

export default Signup