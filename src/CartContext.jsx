import React, { useState, createContext, useEffect } from 'react'

export const CartContext = createContext();

export function CartProvider( { children }) {
    const [cartItems, setCartItems] = useState([]); // State to hold cart items
    const [totalPrice, setTotalPrice] = useState(0); // State to hold total price
    const [totalItems, setTotalItems] = useState(0); // State to hold total items


    useEffect(() => {
      handleUpdateTotalPrice(); // Update total price whenever cart items change
      handleUpdateTotalItems(); // Update total items whenever cart items change
    }, [cartItems]); // Dependency array to trigger effect on cartItems change
    const handleAddToCart = (item) => {
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
      if(existingItem) {
        setCartItems(cartItems.map(cartItem => 
          cartItem.id === item.id ? {...cartItem, quantity: item.quantity} : cartItem
        ));
      } else {
        setCartItems([...cartItems, item]);
      }
    }
    const handleRemoveFromCart = (item) => {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    }

    const handleClearCart = () => {
      setCartItems([]);
    }
    const handleUpdateTotalPrice = () => {
      const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setTotalPrice(total);
    }
    const handleUpdateTotalItems = () => {
      const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      setTotalItems(total);
    }
  return (
    <CartContext.Provider value={{ 
        cartItems, 
        totalPrice, 
        totalItems, 
        handleAddToCart, 
        handleRemoveFromCart, 
        handleClearCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}
