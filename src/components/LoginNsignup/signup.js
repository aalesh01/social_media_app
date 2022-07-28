import React, { useState } from 'react'
import "./signup.css"
import profile from "./uid.png"
import reg1 from "../LoginNsignup/reg1.png"
import reg2 from "../LoginNsignup/reg2.png"
import reg3 from "../LoginNsignup/reg3.png"
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
                <h3 className="loginLogo">Social Tree.</h3>
                <span className="loginDesc">Connect like a tree</span>
                
                <img className='reg-image' src={reg1}></img>
                <img className='reg-image2' src={reg2}></img>
                <p id='almost' className="loginLogo1">Almost Done.</p>
                <img className='reg-image3' src={reg3}></img>
               
            </div>

            
        <div className="loginRight">
        <div className='reg-text1'>
            <p className='reg-para1'>START FOR FREE</p>
          <h1 className='reg-head1'>Sign Up</h1>
          <p className='reg-para2'>Already a member?<span className='reg-span2'>Log in</span></p>
          </div>
          
        <div className="loginBox">

        <div className='imgs'>
            <div className='img-container'>
              <img src={profile} alt='profile' className='profile'/>


            </div>
            </div>

            <form className='input-fields'>

            <label>Name</label>
            <input onChange={handleForm} placeholder="Fullname" type="text" name='name' className="loginInput" />
            <label>Email</label>
            <input onChange={handleForm} placeholder="Email" type="email" name='email' className="loginInput" />
            <label>Password</label>
            <input onChange={handleForm} placeholder="Password" type="password" name='password' className="loginInput" />
            <label>Phone</label>
            <input onChange={handleForm} placeholder="Phone no.." type="tel" name='phone' className="loginInput" />
            <label>Gender</label>
            <input onChange={handleForm} placeholder='Gender' type="text" name='gender' className='loginInput'/>
            <label>Date of Birth</label>
            <input onChange={handleForm} placeholder='Select your DOB' type="Date" name='dob'  className='loginInput'/>
            <label>Profile Picture</label>
            <input onChange={handleForm} placeholder='Insert your image url' name='image' className='loginInput'/>

            <button onClick={()=>handleSubmit()} className="loginButton2">Sign Up</button>
            
            </form>
            
          </div>
        </div>
      </div>
    </div>
        
        </>

      );}

export default Signup
