import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Fresh Farm fruits & Drinks</h1>
          <p>
            Your one-stop shop for organically grown fruits and refreshing
            drinks.
          </p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          At Fresh Farm, we specialize in cultivating the freshest fruits and
          preparing natural drinks for a healthy lifestyle.
        </p>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-gallery">
          <div className="product">
            <img src="https://www.realfruitpower.com/RealFruit/RealFruitImages/432/image-thumb__432__full-banner/contentimage7-9-2014972017521.64026287.png"></img>
            <h3>Oranges</h3>
            <p>Delicious, juicy, and full of vitamin C.</p>
          </div>
          <div className="product">
            <img
              src="https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-pure-strawberry-smoothie-isolated-with-transparent-background-png-image_13402843.png"
              alt="Strawberry Smoothie"
            />
            <h3>Strawberry Smoothie</h3>
            <p>Refreshing, made from our own strawberries.</p>
          </div>
          <div className="product">
            <img
              src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/320012--01--1549602291.jpeg"
              alt="Grapes"
            />
            <h3>Grapes</h3>
            <p>Perfectly ripe and ready to eat.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What our customers say</h2>
        <div className="testimonial">
          <p>
            "The freshest fruits I've ever tasted! Highly recommend their
            oranges and smoothies!"
          </p>
          <p>- Sarah W.</p>
        </div>
        <div className="testimonial">
          <p>
            "Quality and taste in every bite. The strawberry smoothie is a
            must-try!"
          </p>
          <p>- Mike L.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Contact us at:info@wegrow.com</p>
        <p>Follow us on social media for the latest updates and offers.</p>
      </footer>
    </div>
  );
};

export default Home;
