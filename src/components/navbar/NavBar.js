import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import { AuthContext } from '../contextAPI/authContext';

function NavBar() {

    
    const { toggleAuth, isAuth, handleIsAuth } = React.useContext(AuthContext);


    return (

        <div className = "header">
            <div className='logo-div'>
             <Link to='/'>
                <div className='app-name'><h1 className='logo'>SOCIAL TREE</h1></div>
            </Link>
            </div>
            
            <div className='head-center'>
            <nav className = "header_center">
                
                <span className='nav-ele'><Link to = '/'>Home</Link></span>
                <span className='nav-ele'><Link to = '/profile'>Profile</Link></span>
                <span className='nav-ele'><Link to = '/setting'>Settings</Link></span>
                <Link to='/post'><button className='create-btn'>Create</button></Link>
                
            
            </nav>
            </div>
            
            <div className = "header_right">
                
                
                {isAuth ? null : <span><Link to = '/signup'><button  className='reg-btn'>Signup</button></Link></span>  }  
                <span><Link to = '/login'>
                    {isAuth ? <button onClick={()=>toggleAuth(false)} className='log-btn'>Logout</button>: <button className='log-btn'>Login</button> }
                    </Link></span>
                
            
            { isAuth  ? <img className='nav-dp' src={localStorage.getItem("dp")} /> : null }
             
             </div>
        </div>
    );
}

export default NavBar