import React, {useState, useEffect, useContext } from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import { CartContext } from '../CartContext'
import Footer from './Footer'
import StarRatings from "react-star-ratings";

export default function Shopping() {
const [products, setProducts] = useState([])
const {handleAddToCart} = useContext(CartContext) // Access handleAddToCart from context

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

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
            price={product.price}
            onClick={handleAddToCart}
          />  
        ))}
      </div>
      <Footer />
    </div>
  )
}
