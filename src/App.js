import './App.css';
import Signup from './components/LoginNsignup/signup';
import CreatePost from './components/post /createpost';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/home/homepage';
import {Routes, Route}  from 'react-router-dom';
import Login from './components/LoginNsignup/login';
import { AuthContext } from './components/contextAPI/authContext';
import React from 'react';
import Profile from './components/profile/profile';



import { useState } from 'react';

function App() {
   
  const { toggleAuth, isAuth, handleIsAuth } = React.useContext(AuthContext);


  return (
    <div className="App">
       <NavBar/> 
       <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/' element={isAuth ? <Homepage/> : <Login />}/> 
        <Route path='/post' element={<CreatePost/>} />
        <Route path='/profile' element={isAuth ? <Profile/> : null} />
      </Routes>
    </div>
  );
}


export default App;
