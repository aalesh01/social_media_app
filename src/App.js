import logo from './logo.svg';
import './App.css';
import Signup from './components/LoginNsignup/signup';
import Login from './components/LoginNsignup/login';
import CreatePost from './components/post /createpost';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/home/homepage';
import {Routes, Route, Switch}  from 'react-router-dom';
import Profile from './components/profile/profile';


import { useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="App">
       <NavBar isAuth={isAuth} setIsAuth={setIsAuth} /> 
        

      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/' element={isAuth ? <Homepage/> : <Login/>}/> 
        <Route path="/post" element={<CreatePost/>}/>

      
      </Routes>
      <Profile/>
    </div>
  );
}


export default App;
