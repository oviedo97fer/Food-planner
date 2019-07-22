import React from 'react';

import './style.css';

const CardToday = ({ foodName }) =>{
    return(
        <div className='cardTodayCont'>
            <h4>Hoy</h4>
            <h2>{ foodName }</h2>
        </div>
    )
}

export default CardToday;