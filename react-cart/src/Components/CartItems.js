import React from 'react'
import {BsArrowUp, BsArrowDown} from "react-icons/bs";
import { useCartContext } from './CartContext';
const CartItems = ({id, price, name, image, amount}) => {
    const {removeItem, addItem, decreaseItem} = useCartContext();
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
            {/* add amount */}
          <button className="add-btn" onClick={()=>addItem(id)}>
          
            <BsArrowUp />
          </button>
<h2>{amount}</h2>
{/* decrease amount */}
          <button className="add-btn" onClick={()=>decreaseItem(id)}>
            <BsArrowDown />
          </button>
        </div>
      </div>
    );
}

export default CartItems
