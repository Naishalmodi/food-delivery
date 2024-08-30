import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

export const storeContext = createContext(null)
const StoreContextProvider = (props)=>{

    const [cartitem,setCartitem] = useState({});
    const addToCart = (itemID)=>{
        if(!cartitem[itemID]){
            setCartitem((prev)=>({...prev,[itemID]:1}))
        }
        else{
            setCartitem((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        }
    }

    const removeFromCart = (itemID)=>{
        setCartitem((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartitem)
        {
            if(cartitem[item]>0)
            {
                let iteminfo = food_list.find((product)=>product._id === item);
                totalAmount += iteminfo.price*cartitem[item];
            }
        }
        return totalAmount;
    }

    // useEffect(()=>{
    //     console.log(cartitem)
    // },[cartitem])
    
    const contextValue = {
        food_list,cartitem,setCartitem,addToCart,removeFromCart,getTotalCartAmount
    }

    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}
export default StoreContextProvider