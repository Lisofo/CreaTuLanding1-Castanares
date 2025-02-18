import React from 'react';
import { Link } from 'react-router';
import CartWidget from './CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="brand"><Link to='/'>Dimensional Art</Link></div>
      <ul className="categories">
        <li><Link to="/category/smartphones">Smartphones</Link></li>
        <li><Link to="/category/laptops">Laptops</Link></li>
        <li><Link to="/category/fragrances">Fragrances</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;