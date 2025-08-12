// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer class="footer">
  <div class="footer-container">
    
    <div class="footer-brand">
      <h2>ResumeMix</h2>
      <p>Create beautiful resumes in minutes.</p>
      <div class="footer-socials">
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
      </div>
    </div>

    
    <div class="footer-links">
      <h3>Company</h3>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>

    <div class="footer-links">
      <h3>Support</h3>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
      </ul>
    </div>

    
    <div class="footer-newsletter">
      <h3>Subscribe</h3>
      <form>
        <input type="email" placeholder="Your email" />
        <button type="submit">Join</button>
      </form>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 ResumeMix. All rights reserved.</p>
  </div>
</footer>

);

export default Footer;
