import React from 'react'
import {BsArrowUp, BsArrowDown} from "react-icons/bs";
import { useCartContext } from './CartContext';
const CartItems = ({id, price, name, image}) => {
    const {removeItem} = useCartContext();
    return (
      <div className="individual-product-container">
        <div className="cart-ind"key={id}>
          <img src={image} />
          <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button className="remove-btn" onClick={()=>removeItem(id)}>remove</button>
          </div>
        </div>
        <div className="counter-btn">
          <button className="add-btn">
          
            <BsArrowUp />
          </button>
<h2>1</h2>
          <button className="add-btn">
            <BsArrowDown />
          </button>
        </div>
      </div>
    );
}

export default CartItems
