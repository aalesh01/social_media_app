import logo from './logo.svg';
import './App.css';
import CreatePost from './components/post /createpost';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/home/homepage';
import {Routes, Route, Switch}  from 'react-router-dom';
import Login from './components/LoginNsignup/login';
import Signup from './components/LoginNsignup/signup';
import { useEffect, useState } from 'react';

function App() {

  
 const[isAuth,setIsAuth] = useState(false);
 


  return (
    <div className="App">
       <NavBar isAuth={isAuth} setIsAuth={setIsAuth} /> 
        

      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* <Route path='/' element={isAuth ? <Homepage/> : <Login/>}/>  */}
        <Route path='/' element={<Homepage/>}/>
        <Route path='/post' element={<CreatePost/>}/>
      </Routes>
    </div>
  );
}

export default App;
