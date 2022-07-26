import logo from './logo.svg';
import './App.css';
import CreatePost from './components/post /createpost';
import NavBar from './components/navbar/NavBar';
import Homepage from './components/home/Homepage';
import {Routes, Route}  from 'react-router-dom';
import Login from './components/LoginNsignup/login';
import HomePage from './components/home/homepage';

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
      </Routes>
      <Homepage/>
    </div>
>>>>>>> 6525f8687f941a5c80305191008fb04cc6678fbd
  );
}

export default App;
