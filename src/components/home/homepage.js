import React, { useState ,useEffect} from 'react'
import Card from './Card'
import './Homepage.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from '@chakra-ui/react';
// import { elementAcceptingRef } from '@mui/utils';

export default function Homepage() {
   
  const [posts, setPosts] = useState([]);
  const [commentArray , setComment] = useState([]);
    
    const handleForm= (e) => {
        const { name, value } = e.target;
        setComment([value])
    }

    const handleSubmit = async (id,comments) => {
        await fetch(`http://localhost:8080/posts/${id}/`, {
            method: "PATCH",
            body: JSON.stringify({comments:[...comments,...commentArray]}),
            headers: { "content-type": "application/json" }
        })
    }   
 
  useEffect(()=>{
       fetch(`http://localhost:8080/posts`)
       .then (res=>res.json())
       .then (res=>setPosts(res))
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
          <>
          <Card key={ele.id} title={ele.name} img src ={ele.image} description={ele.text}
          />
          <div className='comment-div'>
            <input className='input-comment' onChange={handleForm} name='comment' placeholder='add a comment' type="text" />
            <Button className='comment-btn' onClick={()=>handleSubmit(ele.id,ele.comments)} >Comment</Button>
          </div>
          <div id='commentSection'>
            {
          
             ele.comments.map(element => (
                  <p key={element.id}>{element}</p>
                  
             ))
            }
          </div>
          

          </>
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
