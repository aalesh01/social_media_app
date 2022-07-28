import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Card.css';






export default function Card({ src, title, description, likes, id }) {
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
    fetch('http://localhost:8080/posts/' + id, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data.like_count));
  }, [likeCount])


  const fetchData = () => {
    setLikeCount(likeCount + 1);

  }


  return (
    <div className='main'>
      <div className='card'>
        <div className="card_info">
          <img className='nav-dp' src={localStorage.getItem("dp")}></img>
          <h2 className='user-name'>{title}</h2>
          <div className='img-div1'><img className='card-img' src={src} alt="" />
          </div>

          <p className='post-caption'><span className='post-user'>{title}</span>{description}</p>
          <div className='like'><button className='btn-like' onClick={fetchData}>
            <svg id='like-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" /></svg>
          </button>
            <span className='likes-count'>
              <p>{likeCount}</p>
            </span></div>
        </div>
      </div>
    </div>


  );
}
