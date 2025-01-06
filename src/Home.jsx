/* import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to Our Company</h2>
        <p>This is the home page content.</p>
      </div>
      <div className="home-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeevmssBJPR2VMWkoPLp8WxonDpmzaszNIqw&s.jpg" alt="Home" />
      </div>
    </div>
  );
};

export default Home;
 */

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const itemId = 42; // Example data
    return (
        <div>
            <h1>Home Component</h1>
            <Link to={`/details/${itemId}`}>Go to Details</Link>
        </div>
    );
};

export default Home;
