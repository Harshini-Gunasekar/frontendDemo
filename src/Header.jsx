import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowWoW_P-XSQcsjIZehSE2ZisPvbZ4JJ7HzA&s.jpg" alt="Company Logo" />
        <h1>Harshini Company</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
