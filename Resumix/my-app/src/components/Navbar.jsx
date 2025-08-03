import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Resumix</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#templates">Templates</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#get-started" className="cta">Get Started</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
