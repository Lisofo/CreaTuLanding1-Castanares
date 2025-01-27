import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="brand">Dimensional Art</div>
      <ul className="categories">
        <li>Impresiones 3D</li>
        <li>Sublimaciones</li>
        <li>Otros</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;