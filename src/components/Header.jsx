import React from 'react'
import { House, ShoppingBag, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <nav>
      <ul className='flex'>
        <li>
          <div className='list-item'>
            <House size={40}/>
          </div>
          <div className='list-item'>
            <a href="">Home</a>
          </div>
        </li>
        <li>
          <div className='list-item'>
            <ShoppingBag size={40}/>
          </div>
          <div className='list-item'>
            <a href="">Shopping</a>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className='list-item'>
            <ShoppingCart size={40}/>
          </div>
        </li>
      </ul>
    </nav>
  )
}
