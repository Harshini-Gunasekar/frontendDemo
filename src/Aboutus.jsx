import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h2>About Us</h2>
        <p>Learn more about our company.</p>
      </div>
      <div className="aboutus-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkdQVgCZ4YCfqIxU0QY_vNpDqksRzy5kUYg&s.jpg" alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
