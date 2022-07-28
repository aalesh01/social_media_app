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
                <span className='nav-ele'><Link to = '/'>Settings</Link></span>
                <Link to='/post'><button className='create-btn'>Create</button></Link>
                
            
            </nav>
            </div>
            
            <div className = "header_right">
                {/* { users ? null : }*/}
                
                
                {isAuth ? null : <span><Link to = '/signup'><button  className='reg-btn'>Signup</button></Link></span>  }  
                <span><Link to = '/login'>
                    {isAuth ? <button onClick={()=>toggleAuth(false)} className='log-btn'>Logout</button>: <button className='log-btn'>Login</button> }
                    </Link></span>
                
                <span className='dp'><img src='https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'></img></span>
             </div>
        </div>
    );
}

export default NavBar