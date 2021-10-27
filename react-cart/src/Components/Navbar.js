import React from 'react'

import { BsBag } from "react-icons/bs";
import { useCartContext } from './CartContext';
const Navbar = () => {
console.log(useCartContext())
const {total, cartItems} = useCartContext()
    return (
      <nav>
        <section className="container">
          <h1> UseReducer Cart</h1>
          <button className='cart-btn'>
            <BsBag />
          </button>
         {/* { total === 0 ?  */}
          <p className='count-display'>{cartItems.length}</p>

        </section>
      </nav>
    );
}

export default Navbar
