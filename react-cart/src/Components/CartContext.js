import React, {useContext, useState, useReducer} from 'react'

import reducer from './Reducer';
import { data } from './data';
const cartContextProvider = React.createContext();

const initialState={
    loading: false,
    cartItems: data, 
    total:0, 
    amount:0
}
export const CartContext = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <cartContextProvider.Provider value={{...state}}>
                {children}
            </cartContextProvider.Provider>
        </div>
    )
}


export const useCartContext = ()=>{
    return useContext(cartContextProvider)
}
//custom hook

