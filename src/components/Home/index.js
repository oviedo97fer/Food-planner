import React, {useState} from 'react';
import CardToday from '../CardToday';
import CardSemana from '../CardSemana';
import CardFood from '../CardFood';

import './style.css';

const Home = () => {
    const [food, setFood] = useState([
        {
            name: 'Fideos con Queso',
            day: 'LUN'
        },
        {
            name: 'Hamburguesas',
            day: 'MAR'
        },
        {
            name: 'Milanesas con Puré',
            day: 'MIE'
        },
        {
            name: 'Milanesas con ensalada',
            day: 'JUE'
        },
        {
            name: 'Lorem Ipsum',
            day: 'VIE'
        },
        {
            name: 'Tortilla de papas',
            day: 'SAB'
        }
    ])
    return(
        <div className='homeCont'>
            <CardToday foodName='Pollo al Verdeo'/>
            <CardToday foodName='Spaghetti'/>
            <CardSemana/>
            {
                food.map(f=>(
                    <CardFood key={f} food={f.name} day={f.day}/>
                ))
            }
        </div>
    );
};

export default Home;