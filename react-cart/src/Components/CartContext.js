import React, {useContext, useState, useEffect, useReducer} from 'react'

import reducer from './Reducer';
import { data } from './data';
const cartContextProvider = React.createContext();

const initialState={
    loading: false,
    cartItems: data, 
    total:0, 
    amount:1
}
let url = 'https://course-api.com/react-useReducer-cart-project'
export const CartContext = ({children}) => {

    

    const [state, dispatch] = useReducer(reducer, initialState);


    //pass in all your dispatch methods in a fucntion

    const clearCart = () =>{
        dispatch({type:"clear"})
    }

    const removeItem = (id)=>{
        dispatch({type:"remove", payLoad:id})
    }

    const addItem = (id)=>{
        dispatch({type:"add", payLoad:id})
    }

    const decreaseItem = (id)=>{
        dispatch({type:"decrease", payLoad:id})

    }

    useEffect(() => {
       dispatch({ type: "ADDALL" });
    }, [state.cartItems])
    

    //to fecth data 

    const fetchData = ()=>{
        dispatch({type:"LOADING"});
       const cart = fetch(url)
         .then((resp) => resp.json())
         .then((data) => dispatch({ type: "DISPLAY_ITEMS", payLoad:data }));
        console.log(cart)
        // dispatch({type:"DISPLAY_ITEMS", payLoad:cart})

    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            <cartContextProvider.Provider value={{...state, clearCart, removeItem, addItem, decreaseItem}}>
                {children}
            </cartContextProvider.Provider>
        </div>
    )
}


export const useCartContext = ()=>{
    return useContext(cartContextProvider)
}
//custom hook

