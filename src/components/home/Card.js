import React from 'react';
import './Card.css';


export default function Card({src, title, description}) 

{



    return (
        <div className='main'>
        <div className = 'card'>
            <div className = "card_info">
            <img className='nav-dp' src='https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1781&q=80'></img>
               <h2 className='user-name'>{title}</h2>
               <div className='img-div1'><img className='card-img' src= {src} alt = "" />
               </div>
               
               <p className='post-caption'><span className='post-user'>{title}</span>{description}</p>
               {/* <div className='comment-div'>
                <input type='text' ></input>
               </div> */}
            </div>
        </div>
        </div>

    );
}
