import { data } from "./data";

const reducer=(currentState, action)=>{


    if(action.type==='clear'){
        return {...currentState, cartItems: []}
    }

    if(action.type==='remove'){
        return {...currentState, cartItems: currentState.cartItems.filter((value)=> value.id !== action.payLoad)}
    }
    if(action.type==='add'){
     let tempCart = currentState.cartItems.map((eachItem)=>{
         //if the id matches, i will copy the items from  the array
         if(eachItem.id=== action.payLoad){
return {...eachItem, amount: eachItem.amount+1}
         }
         //if doesnot match the item the same way
         return eachItem

     });
    return {...currentState, cartItems:tempCart}    }








//     if(action.type==='add'){

//         // return {...currentState, amount: currentState.amount+1}
//         console.log('you')
// //        let tempCart = currentState.cartItems.map((cartItems)=>{
// //            if(cartItems.id === action.payLoad){
// // return {...cartItems, amount: cartItems.amount+1
// // }
// //            }
// //            console.log(currentState.amount)
// //            return cartItems
// //        });
// //        return {...currentState, cartItems:tempCart}
//     }
    return currentState





}

export default reducer;