import React from 'react';

import './style.css';

const CardFood = ({ food, day }) =>{
    return(
        <div className='cardFood'>
                <h4>{ day }</h4>
                <h2>{food}</h2>
        </div>
    )
}

export default CardFood;