import React from "react";
import { PorkRice } from "../../../Assets/Food-images";
import Button from '../../../components/Buttons/Buttons';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          {/* <h3>Traditional Mediterranean Recipes with a Modern Twist</h3> */}
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Button
            variant="primary"
            to="/booking"
            className="btn-primary"
            aria-label="Reserve a table"
          >
            Reserve a Table
          </Button>
        </div>
        <div
          className="hero-image"
          aria-label="Food at Little Lemon restaurant"
        >
          <img
            src={PorkRice}
            alt="Delicious food at Little Lemon"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
