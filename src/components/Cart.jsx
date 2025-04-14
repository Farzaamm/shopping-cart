import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import Header from './Header';
import Footer from './Footer';
import { CircleMinus, CirclePlus, Trash, Trash2 } from 'lucide-react';

export default function Cart() {
  const { cartItems, totalPrice, totalItems, handleAddToCart, handleDecreaseQuantity, handleRemoveFromCart, handleClearCart } = useContext(CartContext);
  const handleRemove = (item) => {
    handleRemoveFromCart(item);
  };
  const handleClear = () => {
    handleClearCart();
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    handleClearCart(); // Clear the cart after checkout
  };

  return (
    <div className="component">
      <Header />
      <h2 className="cart-title">Your Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty. 🥲</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p>Price: <span className="item-price" >${item.price}</span></p>
                    <div className="quantity-container">
                      <CircleMinus className='plus-minus' onClick={() => handleDecreaseQuantity(item)} />
                      <p>{item.quantity}</p>
                      <CirclePlus className='plus-minus' onClick={() => handleAddToCart(item)} />
                    </div>
                    <p >Subtotal: <span className='subtotal' >${item.price * item.quantity}</span></p>
                  </div>
                  <button 
                    className="remove-button" 
                    onClick={() => handleRemove(item)}>
                      <Trash2 size={30} strokeWidth={2}/>
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <p>Total Items: <span className="total-amount">{totalItems}</span></p>
              <p>Total Price: <span className="total-amount">${totalPrice}</span></p>
              <div className="cart-actions">
                <button className="checkout-button" onClick={() => handleCheckout()}>Checkout</button>
                <button className="clear-cart-button" onClick={handleClear}>Clear Cart</button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}
