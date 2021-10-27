import React from 'react'
import { useCartContext } from './CartContext'
import CartItems from './CartItems';
const Main = () => {
   const{amount, cartItems, total, removeItem} = useCartContext();
   if(cartItems.length===0){
       return (
         <main>
           <h1 className='header'> Your bag is currently empty</h1>
         </main>
       );
   }
    return (
       <main>
           
           <h1 className='header'> Your Bag Items</h1>
          
           <div className='bag-container'>
               <div className='product-details'>
                   {cartItems.map((value)=>{
                    
                       return <CartItems {...value} />

                   })}
               </div>



           </div>
       </main>
    )
}

export default Main
