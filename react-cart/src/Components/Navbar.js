import React from 'react'

import { BsBag } from "react-icons/bs";

const Navbar = () => {
    return (
      <nav>
        <section className="container">
          <h1> UseReducer Cart</h1>
          <button className='cart-btn'>
            <BsBag />
          </button>
          <p className='count-display'>2</p>
        </section>
      </nav>
    );
}

export default Navbar
