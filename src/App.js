import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar Section */}
      <header className="header">
        <div className="logo-container">
          {/* Placeholder for logo */}
          <div className="logo"></div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="cta-button">Reserve a Table</button>
          </div>
          <div className="hero-image">
            {/* Hero image placeholder */}
          </div>
        </section>

        {/* Highlights Section */}
        <section className="highlights">
          <div className="section-header">
            <h2>This week's specials!</h2>
            <button className="cta-button">Online Menu</button>
          </div>
          <div className="specials-cards">
            {/* Cards will be added here - consider mapping through menu items */}
            <article className="menu-card">
              <div className="card-image"></div>
              <div className="card-content">
                <h3>Special Dish</h3>
                <p className="price">$12.99</p>
                <p className="description">Description of this amazing dish that will make your mouth water.</p>
                <button className="order-btn">Order a delivery</button>
              </div>
            </article>
            {/* Additional cards would be placed here */}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            {/* Testimonial cards */}
            <article className="testimonial-card">
              <div className="rating">Rating: 5/5</div>
              <div className="customer-info">
                <div className="customer-image"></div>
                <h4>Customer Name</h4>
              </div>
              <p>"Great food and atmosphere!"</p>
            </article>
            {/* Additional testimonials would be placed here */}
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="about-content">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Information about Little Lemon restaurant, its history, and its owners.</p>
          </div>
          <div className="about-images">
            <div className="image-placeholder"></div>
            <div className="image-placeholder"></div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            {/* Logo placeholder */}
          </div>
          <div className="doormat-navigation">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order-online">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <address>
              <p>123 Main Street</p>
              <p>Chicago, IL</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@littlelemon.com</p>
            </address>
          </div>
          <div className="social-links">
            <h3>Social Media</h3>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Little Lemon Restaurant</p>
        </div>
      </footer>
    </div>
  );
}

export default App;