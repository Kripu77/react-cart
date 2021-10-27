import { data } from "./data";

const reducer=(currentState, action)=>{


    if(action.type==='clear'){
        return {...currentState, cartItems: []}
    }

    if(action.type==='remove'){
        return {...currentState, cartItems: currentState.cartItems.filter((value)=> value.id !== action.payLoad)}
    }
    return currentState





}

export default reducer;