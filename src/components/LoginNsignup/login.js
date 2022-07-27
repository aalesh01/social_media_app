import React, { useEffect, useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import Signup from './signup';

import "./login.css"
import profile from "./uid.png"
import registration from "../LoginNsignup/registration_photo.png"
const Login = () => {
  const [user , setUser] = useState([]);
  const [loginUser,setLoginUser] = useState({});
  let navigate=useNavigate();
   
  useEffect(()=>{
    localStorage.setItem('isuser',loginUser);
  },[]);


   

  useEffect( ()=>{
       fetch(`http://localhost:8080/users`)
       .then (res=>res.json())
       .then (res=>setUser(res))
       console.log(user);
  }, []);

  const handleForm= (e) => {
    const { name, value } = e.target;
    setLoginUser({...loginUser,[name]: value});
    
}

  const handleSubmit =  () => {
      user.forEach(ele=>{
         if(ele.email===loginUser.email && ele.password===loginUser.password){
          alert("Sign in Successfull");
          navigate('/');
         }
          else{ 
            // alert("Invalid user");
        }
      })
      
  }
  return (
    <div className='login1'>
        <div className="loginWrapper1">
            <div className="loginLeft1">
                <h3 className="loginLogo1">Social Tree.</h3>
                <span className="loginDesc1">Grow like a tree</span>
                <img className='regis-img' src={registration}></img>
            </div>
        <div className="loginRight1">
          <div className='reg-text'>
            <p className='reg-p1'>START FOR FREE</p>
          <h1 className='reg-head'>Log in</h1>
          <p className='reg-p2'>Already a member?<span className='reg-span'>Log in</span></p>
          </div>
        <div className="loginBox1">
            <label className='login-label1'>Email</label>
            <input onChange={handleForm} placeholder="Email" name='email'  type="email"  required className="loginInput1" />
            <label className='login-label2'>Password</label>
            <input onChange={handleForm} placeholder="Password" name='password' type="password" className="loginInput1" />
            <button onClick={()=>handleSubmit()} className="loginButton1">Log In</button>
            
            <button  className="loginRegisterButton1">
              Create a New Account
            </button>
            <span className="loginForgot1">Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login