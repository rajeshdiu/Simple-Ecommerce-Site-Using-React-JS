import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Shopify</Link> {/* Logo Link */}
        </div>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="search-cart">
          <input type="text" className="search-bar" placeholder="Search products..." />
          <Link to="/cart" className="cart-icon">
            🛒 {/* Cart icon */}
          </Link>
        </div>
      </div>
    </div>
  );
}
