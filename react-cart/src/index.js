import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContext } from './Components/CartContext';
ReactDOM.render(
  <CartContext>
    <App />
  </CartContext>,

  document.getElementById("root")
);