import logo from './logo.svg';
import './App.css';
import CreatePost from './components/post /createpost';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/home/homepage';
import {Routes, Route}  from 'react-router-dom';
import Login from './components/LoginNsignup/login';
import Signup from './components/LoginNsignup/signup';

function App() {
  return (
    <div className="App">
       <NavBar/> 
      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Homepage/>
    </div>
  );
}

export default App;
