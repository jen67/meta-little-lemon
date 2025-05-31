import React from 'react';
import Hero from '../../components/sections/Hero';
import Highlights from '../../components/sections/Highlights';
import Testimonials from '../../components/sections/Testimonials';
import About from '../../components/sections/About';

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