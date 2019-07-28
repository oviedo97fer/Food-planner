import React, {useState, useEffect} from 'react';

import CardFood from '../CardFood';

//import Data
import {useFoodsAlmuerzo, useFoodsCena} from './../../services/getDataFirebase';

import arrow from './arrow.png';
import './style.css';


const CardSemana = () =>{
    const cena = useFoodsCena();
    const almuerzo = useFoodsAlmuerzo();
    
    const [show , setShow] = useState(false); //mostrar menu

    const [foods, setFoods]= useState([]); //lista de comidas

    useEffect(()=>{
      setFoods(almuerzo);
    },[almuerzo])
    
    return(
        <div className='cardSemana'>
            <div className='cardSemanaCont'>
                <h2>Semana</h2>
                <img onClick={()=> setShow(!show)} alt='arrow' src={arrow}/>
                {show && <ul className='cardSemanaList'><li onClick={()=>{setFoods(almuerzo)}}>Almuerzo</li><li  onClick={()=>{setFoods(cena)}}>Cena</li></ul>}
            </div>
            {
                foods.map(f=>(<CardFood key={f.id} food={f.name} day={f.day}/>))
            }
        </div>
    )
}

export default CardSemana;