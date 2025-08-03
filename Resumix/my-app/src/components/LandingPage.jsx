import React from 'react';
import './LandingPage.css';
import ImageSlider from './ImageSlider';
import Features from './features';
import HowItWorks from './HowItWorks';

const LandingPage = () => {
  return (
  <div>
      <section className="landing">
      <div className="landing-content">
        <h1>Create <span className='stunning'>Stunning</span> Resumes in Minutes</h1>
        <p>With Resumix, building your perfect resume is fast, customizable, and completely free. No sign-ups. Just fill and download.</p>
        <a href="#get-started" className="hero-btn">Get Started</a>
      </div>
      <div className="landing-image">
        <ImageSlider />
      </div>
    </section>
    <HowItWorks />
    <Features />
  </div>
  );
};

export default LandingPage;
