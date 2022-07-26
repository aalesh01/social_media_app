import React, { useState } from 'react'
import NavBar from '../navbar/NavBar'
import Card from './Card'
import './Homepage.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Homepage() {

  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
  
      });
    };
    
    window.addEventListener('scroll', toggleVisible);



  return (
    <div>
    <div className='home-card'>
      <Card img src ='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80' title='Shreyas' description='UX Lead'/>
      <Card img src ='https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80' title='Aalesh' description='Backend'/>
      <Card img src ='https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' title='Aditya' description='FrontEnd'/>
    </div>
    <div className='create-post-div'>
        <button  style={{display: visible ? 'inline' : 'none'}} className='scroll-up'><ArrowUpwardIcon onClick={scrollToTop} 
       /></button>
    </div>
    </div>



    
  )
}
