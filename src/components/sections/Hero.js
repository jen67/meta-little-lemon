// filepath: c:\Users\Dell\Desktop\little-lemon\src\components\sections\Hero.js
import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../Assets/icons_assets/restauranfood.jpg"; // Assuming you have an image file in this path

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link
            to="/reservations"
            className="btn btn-primary"
            aria-label="Reserve a table"
          >
            Reserve a Table
          </Link>
        </div>
        <div
          className="hero-image"
          aria-label="Food at Little Lemon restaurant"
        >
         <img src={HeroImage} alt="Delicious food at Little Lemon" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
