//src\components\Header\Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  HamburgerOpen,
  HamburgerClose,
} from "../../Assets/icons_assets/";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Link to="/" state={{ scrollToHero: true }}>
            <img src={Logo} alt="Little Lemon Logo" className="logo" />
          </Link>
        </div>

        <div className="header-navLinks">
          <nav
            className={`nav-menu ${isMenuOpen ? "open" : ""}`}
            aria-label="Primary navigation"
          >
            <ul>
              <li>
                <Link to="/" onClick={closeMenu} state={{ scrollToHero: true }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" onClick={closeMenu}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/booking" onClick={closeMenu}>
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/order-online" onClick={closeMenu}>
                  Order
                </Link>
              </li>
              <li className="login-item">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="btn btn-primary login-link"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <img src={HamburgerClose} alt="Close Menu" className="CloseMenu" />
            ) : (
              <img src={HamburgerOpen} alt="Open Menu" className="OpenMenu"/>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
