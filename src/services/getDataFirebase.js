import {useState, useEffect} from 'react';
//firebase
import firebase from './../firebase';
//getDay
import getDay from './getDay';

export const useFoodsAlmuerzo = ()=>{
    const [foodAlmuerzo, setFoodAlmuerzo] = useState([]);
    useEffect(()=>{
        firebase
            .firestore()
            .collection('foods').where('type','==','almuerzo')
            .get()
            .then((snapshot)=>{
                const newFoods = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
                }))
                setFoodAlmuerzo(newFoods);
            })
    },[]);
    return foodAlmuerzo;
}

export const useFoodsCena = ()=>{
    const [foodsCena, setFoodsCena] = useState([]);

    useEffect(()=>{
        firebase
        .firestore()
            .collection('foods').where('type','==','cena')
            .get()
            .then((snapshot)=>{
            const newFoods = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }))
            setFoodsCena(newFoods);
            })

    }, []);
    return foodsCena;
};

export const useTodayAlmuerzo = () =>{
    const [todayAlmuerzo, setTodayAlmuerzo] = useState({name: null});
    useEffect(()=>{
        firebase
            .firestore()
            .collection('foods').where('day','==',getDay)
            .get()
            .then((snapshot)=>{
                const newFoods = snapshot.docs.map((doc)=>({
                id: doc.id,
                name: doc.data().name
                }))
                setTodayAlmuerzo(newFoods);
            })
    },[]);
    return todayAlmuerzo;
}
