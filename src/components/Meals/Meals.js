import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import FoodSection from '../FoodSection/FoodSection';
import './Meals.css'

const Meals = () => {
     const [foods,setFoods] = useState([]);

     const [eat,setEat] = useState([]);

     useEffect( () => {
         fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
         .then(res => res.json())
         .then(data =>setFoods(data.meals))
     },[])

     const handleClickName = (food) =>{
        const newFood = [...eat,food]
        setEat(newFood);
    }
    
    return (
        <div className='meal-container'>
          <div className="meal">
          
            {
               foods.map(food => <FoodSection
               key = {food.idMeal} 
               food ={food}
               handleClickName={handleClickName}>
               </FoodSection>)
            }
          </div>
          <div className='mealName'>
             <Cart eat ={eat}></Cart>

          </div>
         
        </div>
    );
};

export default Meals;