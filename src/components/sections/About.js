import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
          </p>
          <p>
            The owners, Mario and Adrian, are two Italian brothers who moved to the United States to pursue their shared dream of owning a restaurant. Their passion for Mediterranean cuisine is reflected in every dish.
          </p>
        </div>
        <div className="about-images">
          <div className="image-placeholder" aria-label="Restaurant interior"></div>
          <div className="image-placeholder" aria-label="Restaurant chefs"></div>
        </div>
      </div>
    </section>
  );
}

export default About;