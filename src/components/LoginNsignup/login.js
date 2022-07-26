import React, { useEffect, useState } from 'react';
import { useNavigate }  from 'react-router-dom';

const Login = () => {
  const [user , setUser] = useState([]);
  const [loginUser,setLoginUser] = useState({});
  let navigate=useNavigate();
    
 const getUser = ()=>{
       fetch(`http://localhost:8080/users`)
       .then (res=>res.json())
       .then (res=>setUser(res))
  }

  useEffect(getUser, []);

  const handleForm= (e) => {
    const { name, value } = e.target;
    setLoginUser({...loginUser,[name]: value});
    
}

  const handleSubmit =  () => {
      user.map(ele=>{
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
                <h3 className="loginLogo">Socilia</h3>
                <span className="loginDesc">connect with friends and the world around you Socilia.</span>
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