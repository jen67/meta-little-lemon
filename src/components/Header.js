//Users\Dell\Desktop\little-lemon\src\components\Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import  logo from  "../Assets/icons_assets/Logo.svg"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" className="logo" />
          </Link>
        </div>
        <nav className="nav-menu" aria-label="Primary navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;