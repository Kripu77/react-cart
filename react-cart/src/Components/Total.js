import React from 'react'
import { useCartContext } from './CartContext';
const Total = () => {
    const{total, clearCart, cartItems} = useCartContext();
    console.log(clearCart) 
if(cartItems.length===0){
    return <h1 className='total-container'> Thank You!!!</h1> 
}
    return (
      <section>
        <section className="total-container">
          <h2>Total:</h2>
          <h2>${total}</h2>
        </section>
        <button className='clear-btn' onClick={clearCart}>Clear All</button>
      </section>
    );
}

export default Total
