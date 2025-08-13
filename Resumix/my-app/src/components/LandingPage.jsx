import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="resumix-footer">
    <div className="footer-top">
      <div className="footer-brand">
        <h2>Resumix</h2>
        <p>Create your resume with ease.</p>
      </div>
      <div className="footer-links">
        <ul>
          <li><strong>Product</strong></li>
          <li><a href="#templates">Templates</a></li>
          <li><a href="#features">Features</a></li>
        </ul>
        <ul>
          <li><strong>Company</strong></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul>
          <li><strong>Support</strong></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Resumix. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
