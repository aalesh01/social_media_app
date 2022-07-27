import React from 'react';
import './Card.css';


export default function Card({src, title, description}) 

{

    return (
        <div className='main'>
        <div className = 'card'>
            <div className = "card_info">
               <h2>{title}</h2>
               <div className='img-div1'><img className='card-img' src= {src} alt = "" /></div>
               <h4>{description}</h4>
            </div>
        </div>
        </div>

    );
}
