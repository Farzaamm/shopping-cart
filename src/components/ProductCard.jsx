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
  onQuantityChange,
  onClick,
}) {

  const [quantity, setQuantity] = useState(1)
  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) // Convert to integer to avoid problems when getting total price
    setQuantity(newQuantity)
    onQuantityChange(newQuantity) // Pass the quantity to the parent component
  }

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
        <label htmlFor="Quantity">Quantity</label>
        <input 
          name="Quantity" 
          id="Quantity" 
          type="number" 
          min="1" // Set minimum quantity to 1
          value={quantity} 
          onChange={handleChange}
        />
        <button onClick={() => onClick()}>Add to Cart</button>
      </div>
    </div>
  )
}
