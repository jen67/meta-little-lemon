import React from 'react';
import Hero from './HeroSection/Hero';
import Highlights from './HighlightSection/Highlights';
import Testimonials from './TestimonialSection/Testimonials';
import About from './AboutSection/About';

import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default HomePage;