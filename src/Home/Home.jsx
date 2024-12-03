import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best deals on all your favorite products!</p>
        <button className="shop-now-btn">Shop Now</button>
      </header>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Categories</h2>
        <div className="category-list">
          
          <div className="category-card">
            <img src="\img\desk.jpg" alt="Electronics" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src="\img\fashion.jpg" alt="Fashion" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src="\img\home.jpg" alt="Home & Kitchen" />
            <h3>Home & Kitchen</h3>
          </div>
          <div className="category-card">
            <img src="\img\images.jpg" alt="Gadget" />
            <h3>Gadgets</h3>
          </div>
          <div className="category-card">
            <img src="\img\desk.jpg" alt="Electronics" />
            <h3>Electronics</h3>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {/* Product Card */}
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product 1" />
            <h3>Product Name 1</h3>
            <p>$49.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product 1" />
            <h3>Product Name 1</h3>
            <p>$49.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product 2" />
            <h3>Product Name 2</h3>
            <p>$79.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product 3" />
            <h3>Product Name 3</h3>
            <p>$29.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product 4" />
            <h3>Product Name 4</h3>
            <p>$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Best Selling Products Section */}
      <section className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Best Seller 1" />
            <h3>Best Seller Product 1</h3>
            <p>$99.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Best Seller 2" />
            <h3>Best Seller Product 2</h3>
            <p>$120.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Best Seller 3" />
            <h3>Best Seller Product 3</h3>
            <p>$75.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Best Seller 3" />
            <h3>Best Seller Product 3</h3>
            <p>$75.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Best Seller 3" />
            <h3>Best Seller Product 3</h3>
            <p>$75.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers">
        <h2>Special Offers</h2>
        <div className="offer-list">
          <div className="offer-card">
            <h3>Buy 1 Get 1 Free!</h3>
            <p>On select products. Limited time only!</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <div className="offer-card">
            <h3>30% Off on Electronics</h3>
            <p>Hurry up, before the stock runs out!</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>"Amazing products and fast shipping! I will definitely buy again."</p>
            <h4>- Sarah Johnson</h4>
          </div>
          <div className="testimonial-card">
            <p>"Great customer service and affordable prices. Highly recommended!"</p>
            <h4>- James Lee</h4>
          </div>
          <div className="testimonial-card">
            <p>"I love the variety of products available. So many great deals!"</p>
            <h4>- Emily Davis</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
