const reducer=(currentState, action)=>{


    if(action.type==='clear'){
        return {...currentState, cartItems: []}
    }
    return currentState



}

export default reducer;