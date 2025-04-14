import React from 'react'
import { useState } from 'react'

export default function ProductCard({
  category, 
  id, 
  image, 
  title, 
  stars,  
  rating, 
  count, 
  description, 
  price,
  onClick,
}) {

  const [quantity, setQuantity] = useState(1)
// Save the product details when the user clicks the "Add to Cart" button to be used in the parent component
  const handleAddToCart = () => {
    onClick({category, id, image, title, description, price, quantity}); // Call the onClick function passed from the parent component
  };

  return (
    <div className="product-card">
      <div className='product-image-title-container'>
        <div className="product-image-container">
          <img src={image} alt="product image" />
        </div>
        <h3>{title}</h3>
      </div>
      <div className='product-rating-container'>
        <div>{stars} {rating}</div>
        <p>({count})</p>
      </div>
      <div className='price-container'>
        <p>${price}</p>
      </div>
      <div className='product-quantity-container'>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  )
}
