// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <h2>Resumix</h2>
        <p>Your resume, your way</p>
      </div>
      <div className="footer-nav">
        <div className="nav-column">
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/templates">Templates</a>
          <a href="/how-it-works">How It Works</a>
        </div>
        <div className="nav-column">
          <h4>Resources</h4>
          <a href="/blog">Blog</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-column">
          <h4>Support</h4>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/feedback">Feedback</a>
        </div>
      </div>
      <div className="footer-social">
        {/* Replace with your icons */}
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Resumix. All rights reserved.</p>
      <p className="back-to-top" onClick={() => window.scrollTo(0,0)}>Back to top ↑</p>
    </div>
  </footer>
);

export default Footer;
