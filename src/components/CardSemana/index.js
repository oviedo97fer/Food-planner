import React, {useState} from 'react';


import arrow from './arrow.png';
import './style.css';


const CardSemana = () =>{
    const [show , setShow] = useState(false);
    return(
        <div className='cardSemana'>
            <div className='cardSemanaCont'>
                <h2>Semana</h2>
                <img onClick={()=> setShow(!show)} src={arrow}/>
                {show && <ul className='cardSemanaList'><li>Almuerzo</li><li>Cena</li></ul>}
            </div>
            
        </div>
    )
}

export default CardSemana;