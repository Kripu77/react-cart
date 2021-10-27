import React from 'react'
import {BsArrowUp, BsArrowDown} from "react-icons/bs";

const CartItems = ({id, price, name, image}) => {
    return (
      <div className="individual-product-container">
        <div className='cart-ind'>
          <img src={image} />
          <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button className="remove-btn">remove</button>
          </div>
        </div>
        <div className="counter-btn">
          <BsArrowDown />
          <BsArrowUp />
        </div>
      </div>
    );
}

export default CartItems
