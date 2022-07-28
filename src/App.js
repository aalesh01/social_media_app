import './App.css';
import CreatePost from './components/post /createpost';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/home/homepage';
import {Routes, Route}  from 'react-router-dom';
import Login from './components/LoginNsignup/login';
import Signup from './components/LoginNsignup/signup';
import { AuthContext } from './components/contextAPI/authContext';
import React from 'react';

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
        {/* <Route path='/profile' element={<Profile/>} */}
      </Routes>
    </div>
  );
}

export default App;
