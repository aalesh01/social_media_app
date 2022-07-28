import React, { useState ,useEffect} from 'react'
import NavBar from '../navbar/NavBar'
import Card from './Card'
import './Homepage.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Homepage() {
   
  const [posts, setPosts] = useState([]);
    
 
  useEffect(()=>{
       fetch(`http://localhost:3000/posts`)
       .then(res=>res.json())
       .then(data=>setPosts(data))
       console.log(posts);
  }, []);
  
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
      {
        posts.map(ele=>(
          <Card title={ele.name} src ={ele.image} description={ele.text} likes={ele.like_count} id={ele.id}/>
        ))
      }
      
    </div>
    <div className='create-post-div'>
        <button  style={{display: visible ? 'inline' : 'none'}} className='scroll-up'><ArrowUpwardIcon onClick={scrollToTop} 
       /></button>
    </div>
    </div>



    
  )
}
