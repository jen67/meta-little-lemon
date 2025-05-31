import React from 'react';
import { Link } from 'react-router-dom';

function Highlights() {
  // Sample data - in a real app, this would come from an API or props
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "Fresh vegetables, feta cheese, and olives topped with our house dressing."
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$9.99",
      description: "Toasted bread with tomatoes, garlic and basil."
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$7.99",
      description: "Fresh lemon cake with a light dusting of powdered sugar."
    }
  ];

  return (
    <section className="highlights">
      <div className="container">
        <div className="section-header">
          <h2>This week's specials!</h2>
          <Link to="/menu" className="btn btn-primary">Online Menu</Link>
        </div>
        <div className="specials-cards">
          {specials.map(dish => (
            <article className="menu-card" key={dish.id}>
              <div className="card-image" aria-label={`Image of ${dish.name}`}></div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{dish.name}</h3>
                  <p className="price">{dish.price}</p>
                </div>
                <p className="description">{dish.description}</p>
                <button className="order-btn" aria-label={`Order ${dish.name} for delivery`}>
                  Order a delivery
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;