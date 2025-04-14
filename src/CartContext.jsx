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
          cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem //every click on Add to cart button will increase the quantity of the item in the cart by 1
        ));
      } else {
        setCartItems([...cartItems, item]);
      }
    }

    const handleDecreaseQuantity = (item) => {
      if (item.quantity === 1) {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id)); // Remove item from cart if quantity is 1
      } else {
        setCartItems(cartItems.map(cartItem => 
          cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem // Decrease quantity by 1
        ));
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
      setTotalPrice(Number(total.toFixed(2))); // Set total price to 2 decimal places
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
        handleDecreaseQuantity,
        handleRemoveFromCart, 
        handleClearCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}
