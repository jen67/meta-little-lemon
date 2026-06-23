import React from "react";
import { Link } from "react-router-dom";
import GreekSaladImage from "../../Assets/icons_assets/greek salad.jpg";
import BruschettaImage from "../../Assets/icons_assets/bruchetta.svg";
import LemonDessertImage from "../../Assets/icons_assets/lemon dessert.jpg";
import cardIcon from "../../Assets/icons_assets/creditcard.svg";

function Highlights() {
  // Sample data - in a real app, this would come from an API or props
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      image: GreekSaladImage,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$9.99",
      image: BruschettaImage,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$7.99",
      image: LemonDessertImage,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section className="highlights">
      <div className="container">
        <div className="section-header">
          <h2>This week's specials!</h2>
          <Link to="/menu" className="btn btn-primary">
            Online Menu
          </Link>
        </div>
        <div className="specials-cards">
          {specials.map((dish) => (
            <article className="menu-card" key={dish.id}>
              <div className="card-image">
                <img src={dish.image} alt={`${dish.name}`} loading="lazy" />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{dish.name}</h3>
                  <p className="price">{dish.price}</p>
                </div>
                <p className="description">{dish.description}</p>
                <button
                  className="order-btn"
                  aria-label={`Order ${dish.name} for delivery`}
                >
                  Order a delivery
                  <img src={cardIcon} alt="Order icon" className="order-icon" />
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
