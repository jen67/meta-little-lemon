import React from "react";
import "./Testimonials.css";

function Testimonials() {
  // Sample data
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Best Mediterranean food in Chicago!",
    },
    {
      id: 2,
      name: "John D.",
      rating: 5,
      comment: "Great atmosphere and even better food.",
    },
    {
      id: 3,
      name: "Maria G.",
      rating: 4,
      comment: "Authentic flavors that remind me of home.",
    },
    {
      id: 4,
      name: "Robert L.",
      rating: 5,
      comment: "The lemon dessert is to die for!",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <p className="eyebrow">Loved by guests</p>
          <h2>What people say about Little Lemon</h2>
          <p>
            Friendly service, fresh food, and a place people feel happy to
            return to.
          </p>
        </div>
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.id}>
              <div
                className="rating"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} className="star">
                    ★
                  </span>
                ))}
              </div>
              <div className="customer-info">
                <div className="customer-image" aria-hidden="true">
                  <span>{review.name.charAt(0)}</span>
                </div>
                <div>
                  <h4>{review.name}</h4>
                  <p className="customer-role">Verified guest</p>
                </div>
              </div>
              <p className="testimonial-text">“{review.comment}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
