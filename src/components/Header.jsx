import React from 'react'
import { House, ShoppingBag, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
         <House />
          Home
        </li>
        <li>
          <ShoppingBag />
          Shopping
        </li>
      </ul>
      <ul>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  )
}
