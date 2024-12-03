import React from 'react';
import './About.css'; // Link the CSS file for styling

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <p className="intro">
          Welcome to our website! We are a passionate team dedicated to providing high-quality products and a seamless shopping experience. 
          Our mission is to make shopping fun, easy, and convenient for everyone by offering the latest trends and best deals on a wide range of categories.
        </p>

        <div className="story">
          <h2>Our Story</h2>
          <p>
            Our journey began with a simple idea – to bring convenience and value to the online shopping world. From humble beginnings, we have 
            grown into a trusted eCommerce platform, serving thousands of customers worldwide. With a strong focus on customer satisfaction, 
            we strive to offer an extensive catalog of products, from the latest electronics to fashion, home essentials, and beyond.
          </p>
          <p>
            We understand the importance of providing not only quality products but also a seamless shopping experience. Our goal is to make 
            every visit to our store memorable, whether you're looking for a gift, upgrading your gadgets, or exploring new trends.
          </p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the leading online shopping destination, known for offering a diverse range of products, exceptional customer service, and fast delivery. 
            We aim to empower individuals through innovation, creativity, and trust. By consistently evolving and adapting to our customers' needs, 
            we envision creating a platform that makes shopping an exciting and rewarding experience for everyone.
          </p>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
              <p>John is the visionary behind our platform, ensuring every customer has a top-notch shopping experience. With over 10 years of experience in the eCommerce industry, he continues to drive the company’s mission forward.</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Creative Director</p>
              <p>Jane is responsible for overseeing our website design, branding, and visual direction. Her eye for design ensures that our store looks as good as the products we sell.</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 3" />
              <h3>Michael Johnson</h3>
              <p>Lead Developer</p>
              <p>Michael leads our technical team, making sure our platform runs smoothly. With a deep knowledge of coding and eCommerce tools, he works tirelessly to enhance the user experience.</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 4" />
              <h3>Sarah Lee</h3>
              <p>Marketing Manager</p>
              <p>Sarah handles our marketing campaigns, promotions, and social media presence. She ensures our customers are always up to date with the latest offers and trends.</p>
            </div>
          </div>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            We believe in creating a simple and enjoyable shopping experience. Our mission is to provide our customers with high-quality products 
            at affordable prices, delivered with exceptional service. By continuously improving and innovating, we strive to become a brand you trust 
            and return to time and time again.
          </p>
          <p>
            Whether you're searching for the perfect gadget, the latest fashion, or home essentials, we promise to bring you the best products, 
            at the best prices, with the best service.
          </p>
        </div>

      </div>
    </div>
  );
}
