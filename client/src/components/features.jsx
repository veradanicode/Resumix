import React from 'react';
import './features.css';
import { FaRegFileAlt, FaPalette, FaDownload, FaRocket } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Why Choose Resumix?</h2>
        <p>Create a beautiful, job-ready resume in minutes.</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <FaRegFileAlt className="feature-icon" />
          <h3>Easy to Fill</h3>
          <p>Just enter your info — we’ll handle the formatting and layout.</p>
        </div>
        <div className="feature-card">
          <FaPalette className="feature-icon" />
          <h3>Custom Templates</h3>
          <p>Choose from elegant, modern templates designed to impress.</p>
        </div>
        <div className="feature-card">
          <FaDownload className="feature-icon" />
          <h3>Instant Download</h3>
          <p>Get your resume as a PDF instantly, no signup needed.</p>
        </div>
        <div className="feature-card">
          <FaRocket className="feature-icon" />
          <h3>ATS Friendly</h3>
          <p>Your resume is optimized to pass through screening bots.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
