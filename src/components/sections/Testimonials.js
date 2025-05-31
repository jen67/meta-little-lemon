import React from 'react';

function Testimonials() {
  // Sample data
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Best Mediterranean food in Chicago!"
    },
    {
      id: 2,
      name: "John D.",
      rating: 5,
      comment: "Great atmosphere and even better food."
    },
    {
      id: 3,
      name: "Maria G.",
      rating: 4,
      comment: "Authentic flavors that remind me of home."
    },
    {
      id: 4,
      name: "Robert L.",
      rating: 5,
      comment: "The lemon dessert is to die for!"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {reviews.map(review => (
            <article className="testimonial-card" key={review.id}>
              <div className="rating">Rating: {review.rating}/5</div>
              <div className="customer-info">
                <div className="customer-image" aria-hidden="true"></div>
                <h4>{review.name}</h4>
              </div>
              <p>"{review.comment}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;