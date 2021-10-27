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

if(action.type==="decrease"){
    let tempCart  = currentState.cartItems.map((eachItem)=>{
        if(eachItem.id === action.payLoad){
            return {...eachItem, amount: eachItem.amount-1}
            
        }
        return eachItem
        //to ensure that cart doesnot go under -1 we can chain the filter method, specifically meaning only return those items which are not under 1
    }).filter((eachItem)=> eachItem.amount!==0)
    return {...currentState, cartItems:tempCart}
}

if(action.type==="ADDALL"){ 

  let {total, amount} =currentState.cartItems.
    reduce((cartTotal, cartItem)=>{
        const {price, amount} = cartItem;
        const itemTotal = price *amount
        cartTotal.amount += amount;
        cartTotal.total += parseFloat(itemTotal.toFixed())

        return cartTotal
    },{ total:0, amount:0})
  
   return { ...currentState, total, amount}
    // currentState.cartItems.reduce((acc, curr)=>{

    // },currentState.total)
}

    return currentState





}

export default reducer;