import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import Header from './Header';
import Footer from './Footer';
import { CircleMinus, CirclePlus } from 'lucide-react';

export default function Cart() {
  const { cartItems, totalPrice, totalItems, handleAddToCart, handleRemoveFromCart, handleClearCart } = useContext(CartContext);
  const handleRemove = (item) => {
    handleRemoveFromCart(item);
  };
  const handleClear = () => {
    handleClearCart();
  };

  return (
    <div className="component">
      <Header />
      <h2>Your Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <CircleMinus className="remove-icon" onClick={() => console.log(item.quantity)} />
                    <p>{item.quantity}</p>
                    <CirclePlus className="add-icon" onClick={() => console.log(item.quantity)} />
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <button onClick={() => handleRemove(item)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <p>Total Items: {totalItems}</p>
              <p>Total: ${totalPrice}</p>
              <button onClick={handleClear}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}
