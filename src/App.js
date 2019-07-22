import React, {useState, useEffect} from 'react';
//firebase
import firebase from 'firebase/app';
import 'firebase/database';
import {DB_CONFIG} from './config/config'

import fork from './fork.png';
import menu from './menu.png';
import './App.css';

import Menu from './components/Menu';

//Components
import Home from './components/Home';
//conectando Firebase
const app = firebase.initializeApp(DB_CONFIG);
const db = app.database().ref().child('foods');


//App
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [foods, setFoods] = useState({})
  useEffect(()=>{
    db.on('child_added', snap=>{
      foods.push({
        foodId: snap.key,
        foodName: snap.val().foodName
      });
    setFoods({foods});
    db.push().set({foodName: 'hola'});
    })
  })
  return (
    <div className="App">
      <div className='Nav'>
        <img id='menu' onClick={()=>setShowMenu(!showMenu)} src={menu}/>
        <img id='fork' src={fork}/>
      </div>
      <Menu style={showMenu ? 'showMenu ' : 'noShowMenu '}/>
      <Home/>
    </div>
  );
}

export default App;
