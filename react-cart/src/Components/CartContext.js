import React, {useContext, useState, useReducer} from 'react'

import reducer from './Reducer';
import { data } from './data';
const cartContextProvider = React.createContext();

const initialState={
    loading: false,
    cartItems: data, 
    total:0, 
    amount:1
}
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

