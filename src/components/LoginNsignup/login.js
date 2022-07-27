import React, { useEffect, useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import Signup from './signup';

import "./signup.css"
import profile from "./uid.png"
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
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social Tree</h3>
                <span className="loginDesc">connect with friends and the world around you :D</span>
            </div>
        <div className="loginRight">
        <div className="loginBox">
            <input onChange={handleForm} placeholder="Email" name='email'  type="email"  required className="loginInput" />
            <input onChange={handleForm} placeholder="Password" name='password' type="password" className="loginInput" />
            <button onClick={()=>handleSubmit()} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button  className="loginRegisterButton" onClick={Signup}>
              Create a New Account
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login