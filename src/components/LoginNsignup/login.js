import React, { useEffect, useState } from 'react';
import { Link, useNavigate }  from 'react-router-dom';
import { AuthContext } from '../contextAPI/authContext';
import registration from "../LoginNsignup/registration_photo.png"

import "./login.css"
const Login = () => {

  const [user , setUser] = React.useState([]);
  const [loginUser,setLoginUser] = React.useState({});

  let navigate=useNavigate();
  
  const { toggleAuth, isAuth, handleIsAuth } = React.useContext(AuthContext);
  

  useEffect(()=>{
       fetch(`http://localhost:8080/users`)
       .then (res=>res.json())
       .then (res=>setUser(res))
  }, []);

  const handleForm= (e) => {
    const { name, value } = e.target;
    setLoginUser({...loginUser,[name]: value});
}

  const handleSubmit =  () => {
      user.forEach(ele=>{
         if(ele.email===loginUser.email && ele.password===loginUser.password){
          toggleAuth(true);
          console.log(isAuth)
          alert("Sign in Successfull");
          localStorage.setItem("loginedUser",ele.name)
          navigate('/');
         }
      })
      // if(isAuth===false){
      //   alert('Invalid User')

      // }
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
          <p className='reg-p2'>Not a member?<span className='reg-span'>Sign up</span></p>
          </div>
        <form className="loginBox1">
            <label className='login-label1'>Email</label>
            <input required onChange={handleForm} placeholder="Email" name='email'  type="email"   className="loginInput1" />
            <label className='login-label2'>Password</label>
            <input required onChange={handleForm} placeholder="Password" name='password' type="password" className="loginInput1" />
            <button onClick={()=>handleSubmit()} className="loginButton1">Log In</button>
            
            <Link to="/signup"><button  className="loginRegisterButton1">
              Create a New Account
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login