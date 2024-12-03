import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best deals on all your favorite products!</p>
        <button className="shop-now-btn">Shop Now</button>
      </header>

      <section className="categories">
        <h2>Shop by Categories</h2>
        <div className="category-list">
          <div className="category-card">
            <img src="\img\desk.jpg" alt="Category 1" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src="\img\fashion.jpg" alt="Category 2" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src="\img\home.jpg" alt="Category 3" />
            <h3>Home & Kitchen</h3>
          </div>
          <div className="category-card">
            <img src="\img\images.jpg" alt="Category 1" />
            <h3>Gadget</h3>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
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
        </div>
      </section>
    </div>
  );
}
