import { useContext } from 'react'
import { House, ShoppingBag, ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext';

export default function Header() {
  const { totalItems } = useContext(CartContext);
  return (
    <nav>
      <ul className='flex'>
        <li>
          <div className='list-item'>
            <Link to="/"><House size={40}/></Link>
          </div>
          <div className='list-item'>
            <Link to="/" >Home</Link>
          </div>
        </li>
        <li>
          <div className='list-item'>
            <Link to="/shopping"><ShoppingBag size={40}/></Link>
          </div>
          <div className='list-item'>
            <Link to="/shopping">Shopping</Link>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className='list-item'>
            {totalItems > 0 && <p className='cart-count'>{totalItems}</p>}
            <Link to="/cart"><ShoppingCart size={40}/></Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}
