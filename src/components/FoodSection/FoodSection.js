import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './FoodSection.css';


const FoodSection = (props) => {
    console.log(props)
    const {strMealThumb,strMeal} = props.food;
    
    
    return (
        <div className='food-container'>
        <div className='food'>
            <img src={strMealThumb} alt=''></img>
            <h5>name:{strMeal}</h5>
            
        </div>
           <button onClick={() =>props.handleClickName(props.food)} className='btn-cart'>
            <p>AddName</p>
           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default FoodSection;