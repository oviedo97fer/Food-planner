import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Menu = ({style, handle}) =>{
    return(
        <div  className={style + 'Menu'}>
            <div className='menuCont'>
                <Link to='/planner'>
                    <h3 onClick={handle}>Planificador</h3>
                </Link>
            </div>
            <div onClick={handle} className='hoverMenu'></div>
        </div>
    )
}

export default Menu;