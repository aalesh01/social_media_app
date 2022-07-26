import logo from './logo.svg';
import './App.css';
import CreatePost from './components/post /createpost';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/home/homepage';
import {Routes, Route}  from 'react-router-dom';
import Login from './components/LoginNsignup/login';
<<<<<<< HEAD
import Signup from './components/LoginNsignup/signup';
=======
import HomePage from './components/home/homepage';
>>>>>>> 3e35f41bdfd72873cbdfcfd510c0e3a27d10c857

function App() {
  return (
<<<<<<< HEAD
    <>
 <Login/>
    </>
=======
    <div className="App">
       <NavBar/> 
      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Homepage/>
    </div>
>>>>>>> 6525f8687f941a5c80305191008fb04cc6678fbd
  );
}

export default App;
