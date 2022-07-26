import React,{useState,useEffect} from 'react'

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    
 
   useEffect(()=>{
        fetch(`http://localhost:8080/posts`)
        .then (res=>res.json())
        .then (res=>setPosts(res))
        console.log(posts);
   }, []);

  return (
    <div>H</div>
  )
}

export default HomePage