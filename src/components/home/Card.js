import React, { useEffect,useState } from 'react';

import './Card.css';






  export default function Card({src, title, description, likes, id}) 

{
    const [likeCount, setLikeCount] = useState(likes);

    const [user, setUser] = useState({});



//   useEffect(() => {
//     fetch('http://localhost:3000/posts')
//       .then(response => response.json())
//       .then(data => 
//         {
//             console.log("DATA",data)
//             // console.log("int DATA[0]",parseInt(data.like_count))
//             return setUser(data)
//         })
//         // console.log("user.like_count:",user.like_count)
//         console.log("user", user)
//     // setLikeCount(user.like_count);
//     },[])

    useEffect(() => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "like_count": likeCount })
        };
        fetch('http://localhost:3000/posts/'+id, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id));
    }, [likeCount])
    
 
  const fetchData = () => {
    setLikeCount(likeCount + 1);
    console.log(likeCount);
  }

  
  


    return (
        <div className='main'>
            <div className = 'card'>
                <div className = "card_info">
                    <h2>{title}</h2>
                    <div className='img-div1'><img className='card-img' src= {src} alt = "" /></div>
                        <h4>{description}</h4>
                        <button onClick={fetchData}>Like</button>
                    <div className=''>
                        <p>{likeCount}</p>
                    </div>
                
                    
                </div>
            </div>
        </div>

    );
}
