import React, {useState, useEffect } from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import Footer from './Footer'
import StarRatings from "react-star-ratings";

export default function Shopping() {
const [products, setProducts] = useState([])
const [cartItems, setCartItems] = useState([]) // State to hold cart items

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])


  const handleAddToCart = (cartItem) => {
    setCartItems(prevItems => [...prevItems, cartItem]) // Add the product to the cart (or update the cart state)
  }

  return (
    <div className="component">
      <Header />
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            category={product.category}
            id={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating.rate}
            stars= {<StarRatings
              rating={product.rating.rate}
              starRatedColor="#f50"
              numberOfStars={5}
              name='rating'
              starDimension="25px"
              starSpacing="2px"
            />}
            count={product.rating.count}
            // description={product.description}
            price={product.price}
            // onQuantityChange={handleQuantityChange}
            onClick={handleAddToCart}
          />  
        ))}
      </div>
      <Footer />
    </div>
  )
}
