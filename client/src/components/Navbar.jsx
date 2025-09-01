import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">Resumix</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#features">Features</a></li>
        <li><a href="#templates">Templates</a></li>
        <li><Link to ="/how-it-works">How It Works</Link></li>
        <li className='gs-btn'><Link to="/resume-form">Get Started</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
