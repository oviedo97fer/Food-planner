import React, {useState} from 'react';
//react router v4
import {Route, Switch, Link } from 'react-router-dom';

//addons
import fork from './fork.png';
import menu from './menu.png';
import './App.css';


//Components
import Home from './components/Home';
import Menu from './components/Menu';
import Planner from './components/Planner';


//App
function App() {
  const [showMenu, setShowMenu] = useState(false);
 
  const handleMenu = () => setShowMenu(!showMenu);
  
  return (
    <div className="App">
      <div className='Nav'>
        <img id='menu' onClick={handleMenu} src={menu}/>
        <Link to='/'><img id='fork' src={fork}/></Link>
      </div>
      <Menu handle={handleMenu} style={showMenu ? 'showMenu ' : 'noShowMenu '}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/planner' component={Planner}/>
      </Switch>
    </div>
  );
}

export default App;
