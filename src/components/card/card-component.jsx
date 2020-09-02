import React from 'react';
import './card.styl.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}&size=180*180`}/>
      <h1>{props.monster.name}</h1>  
      <p>{props.monster.email}</p>
    </div>
)