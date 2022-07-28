import React, { useEffect, useState } from 'react';
import './NavBar.css';
// import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Avatar } from '@mui/material';
import logo from './logo.png';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import login from "../LoginNsignup/login";

function NavBar() {

    const [isAuth,setIsAuth] = useState(true);

        // const users = localStorage.getItem('isuser');
        
      




    return (

        <div className = "header">
            <div className='logo-div'>
             <Link to='/'>
                {/* <div className='img-div'><img
                    className="header_icon"
                    src={logo}
                    alt=""
                />
                </div> */}
                <div className='app-name'><h1 className='logo'>SOCIAL TREE</h1></div>
            </Link>
            </div>
            
            <div className='head-center'>
            <nav className = "header_center">
                
                <span className='nav-ele'><Link to = '/'>Home</Link></span>
                <span className='nav-ele'><Link to = '/profile'>Profile</Link></span>
                <span className='nav-ele'><Link to = '/'>Settings</Link></span>
                <Link to='/post'><button className='create-btn'>Create</button></Link>
                
            
            </nav>
            </div>
            
            <div className = "header_right">
                {/* { users ? null : }*/}
                
                <span><Link to = '/signup'>
                <button  className='reg-btn'>Signup</button> </Link></span>  
                <span><Link to = '/login'>
                    <button className='log-btn'>Login</button>
                    </Link></span>
                
               {/* {users ? null:} */}
               <span className='dp'> <img className='nav-dp' src='https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'></img></span>
              {/* <p>Username</p> */}
              {/* <LanguageIcon />
              <ExpandMoreIcon /> */}
              {/* <Avatar/> */}
             </div>
        </div>
    );
}

export default NavBar