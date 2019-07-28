import React from 'react';

//getDataFirebase
import {useTodayAlmuerzo} from './../../services/getDataFirebase';

//getDataToday


import CardToday from '../CardToday';
import CardSemana from '../CardSemana';

import './style.css';


const Home = () => {
    console.log(useTodayAlmuerzo());
    
    return(
        <div className='homeCont'>
            <CardToday foodName={useTodayAlmuerzo().name}/>
            <CardToday foodName='Spaghetti'/>
            <CardSemana/>
        </div>
    );
};

export default Home;