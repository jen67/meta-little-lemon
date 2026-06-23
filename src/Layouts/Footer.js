// filepath: c:\Users\Dell\Desktop\little-lemon\src\components\Footer.js
import React from 'react';
import  logo from  "../Assets/icons_assets/Logo.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-logo" aria-label="Little Lemon Logo">
            <img src={logo} alt="Little Lemon Logo" className="footer-logo-img" />
          </div>

          <div className="doormat-navigation">
            <h3>Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </nav>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <address>
              <p>123 Main Street</p>
              <p>Chicago, IL</p>
              <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
              <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
            </address>
          </div>

          <div className="social-links">
            <h3>Social Media</h3>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>

        </div>


        <div className="copyright">
          <p>© {new Date().getFullYear()} Little Lemon Restaurant</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;