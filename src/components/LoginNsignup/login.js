import React, { useEffect, useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import { AuthContext } from '../contextAPI/authContext'


import "./signup.css"
const Login = () => {

  const [user , setUser] = React.useState([]);
  const [loginUser,setLoginUser] = React.useState({});
  const [userFound,setUserFound] = React.useState();
  let navigate=useNavigate();
  const { toggleAuth, isAuth, handleIsAuth } = React.useContext(AuthContext);
  const toggleUserFound=()=>{
    setUserFound(!userFound);
  }


  

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
      setUserFound(false);
      user.forEach(ele=>{
         if(ele.email===loginUser.email && ele.password===loginUser.password){
          toggleUserFound();
          console.log(userFound);
          alert("Sign in Successfull");
          toggleAuth();
          navigate('/');
         }
      })
      if(userFound===false){
        alert('Invalid user')
      }
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