import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../productsList';

export const ShopContext = createContext(null);
//creating the context api; a store that houses all states and 
// and functions that needs to be accessed in the code 

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getCartTotalAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS
                .find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) =>{
        setCartItems((prev) =>({
            ...prev, 
            [itemId]: prev[itemId] + 1
        }));
    }   //a function to add to the cart

    const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({
            ...prev, 
            [itemId]: prev[itemId] - 1
        }));
    }   //a function to remove from the cart

    const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev) =>({
            ...prev, 
            [itemId]: newAmount
        }));
    }

    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart,
        updateCartItemCount,
        getCartTotalAmount
    };
    // console.log(cartItems);

  return <ShopContext.Provider 
            value={contextValue}
        >
            {props.children}
        </ShopContext.Provider>
}
