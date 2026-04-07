import React from "react";
import "./AboutPage.css";
import {
  FaShoppingBag,
  FaUtensils,
  FaFilm,
  FaStar,
  FaUsers
} from "react-icons/fa";

function AboutPage() {
  return (
    <div className="about-page">
      
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-content">
          <p className="about-tag">Welcome to Vikaasa Mall</p>
          <h1>Experience Luxury, Lifestyle & Leisure</h1>
          <p>
            Vikaasa Mall is not just a shopping destination — it is a complete
            lifestyle experience where fashion, food, entertainment, and
            comfort come together in a modern and elegant environment.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-left">
          <h2>About Vikaasa Mall</h2>
          <p>
            Located in the heart of Vellore, Vikaasa Mall is designed to redefine
            the shopping and entertainment experience. With world-class
            architecture, spacious interiors, and premium brands, it offers a
            perfect destination for families, friends, and visitors.
          </p>

          <p>
            From high-end fashion outlets to multi-cuisine restaurants and
            exciting entertainment zones, every corner of Vikaasa Mall is crafted
            to deliver unforgettable moments.
          </p>
        </div>

        <div className="about-right">
          <div className="about-glass-card">
            <h3>Why Choose Us</h3>
            <ul>
              <li>Premium shopping brands</li>
              <li>Modern and spacious design</li>
              <li>Food courts and restaurants</li>
              <li>Entertainment and fun zones</li>
              <li>Family-friendly environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2>What You Can Explore</h2>

        <div className="features-grid">
          <div className="feature-card">
            <FaShoppingBag />
            <h3>Shopping</h3>
            <p>Explore top fashion brands, accessories, and lifestyle stores.</p>
          </div>

          <div className="feature-card">
            <FaUtensils />
            <h3>Dining</h3>
            <p>Enjoy delicious cuisines from food courts to premium restaurants.</p>
          </div>

          <div className="feature-card">
            <FaFilm />
            <h3>Entertainment</h3>
            <p>Movies, gaming zones, and fun activities for all age groups.</p>
          </div>

          <div className="feature-card">
            <FaUsers />
            <h3>Events</h3>
            <p>Festivals, live shows, and exciting happenings every week.</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="highlight-section">
        <div className="highlight-box">
          <FaStar />
          <h3>Elegant Design</h3>
        </div>

        <div className="highlight-box">
          <FaStar />
          <h3>Premium Experience</h3>
        </div>

        <div className="highlight-box">
          <FaStar />
          <h3>Memorable Moments</h3>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;