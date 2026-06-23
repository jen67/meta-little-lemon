import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "./HeroSection/Hero";
import Highlights from "./HighlightSection/Highlights";
import Testimonials from "./TestimonialSection/Testimonials";
import About from "./AboutSection/About";

import "./HomePage.css";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.scrollToHero) {
      return;
    }

    const element = document.getElementById("hero");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    navigate(location.pathname, { replace: true, state: {} });
  }, [location.pathname, location.state, navigate]);

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
