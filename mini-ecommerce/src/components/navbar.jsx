import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { FaTshirt } from 'react-icons/fa';
import logo from '../images/logo.png';
import './navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Cartify" className="logo" />
          <span className="brand-name">Cartify</span>
        </Link>

        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-items">
            <Link to="/products" className={`nav-link ${isActive('/products')}`}>
              <FaTshirt className="nav-icon" />
              <span>Products</span>
            </Link>
            <Link to="/wishlist" className={`nav-link ${isActive('/wishlist')}`}>
              <FiHeart className="nav-icon" />
              <span>Wishlist</span>
            </Link>
            <Link to="/cart" className={`nav-link cart-link ${isActive('/cart')}`}>
              <div className="cart-icon-container">
                <FiShoppingCart className="nav-icon" />
                <span className="cart-count">0</span>
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}