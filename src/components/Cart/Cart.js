
import React from 'react';
import './Cart.css';

const Cart = ({eat}) => {
    console.log(eat)
    let name = '';
    for(const food of eat){
        name = food.strMeal;
    }
    return (
        <div className='cart'>
            <h3>meal Item:{eat.length}</h3>
            
            {   
                <ol>
                   {
                     eat.map(data=>{
                        return(
                         
                           <li>{data.strMeal}</li> 
                        
                        )
                      })
                   }
                </ol>
            }
           
        </div>
    );
};

export default Cart;