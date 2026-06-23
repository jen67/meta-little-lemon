import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, Logo, TwitterIcon } from "../../Assets/icons_assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" state={{ scrollToHero: true }} aria-label="Little Lemon home page">
              <img
                src={Logo}
                alt="Little Lemon Logo"
                className="footer-logo-img"
              />
            </Link>
          </div>

          <div className="doormat-navigation">
            <h3>Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul>
                <li>
                  <Link to="/" state={{ scrollToHero: true }}>Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/booking">Reservations</Link>
                </li>
                <li>
                  <Link to="/order-online">Order Online</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <address>
              <p>123 Main Street</p>
              <p>Chicago, IL</p>
              <p>
                Phone: <a href="tel:+11234567890">(123) 456-7890</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
              </p>
            </address>
          </div>

          <div className="social-links">
            <h3>Social Media</h3>
            <ul>
              <li>
                <span className="social-icon" aria-label="Facebook">
                  <img src={FacebookIcon} alt="Facebook" className="facebook-icon" />
                </span>
              </li>
              <li>
                <span className="social-icon" aria-label="Instagram">
                  <img src={InstagramIcon} alt="Instagram" className="instagram-icon" />
                </span>
              </li>
              <li>
                <span className="social-icon" aria-label="Twitter">
                  <img src={TwitterIcon} alt="Twitter" className="twitter-icon" />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} Little Lemon Restaurant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
