import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Features from './features';
import HowItWorks from './HowItWorks';
import Navbar from './Navbar'
import Footer from './Footer';

const LandingPage = () => {
  return (
  <div>
    <Navbar/>
      <section className="landing">
      <div className="landing-content">
        <h1>Create <span className='stunning'>Stunning</span> Resumes in Minutes</h1>
        <p>With Resumix, building your perfect resume is fast, customizable, and completely free. No sign-ups. Just fill and download.</p>
        <Link to="/resume-form" className="hero-btn">Get Started</Link>
      </div>
      <div className="landing-image">
        <ImageSlider />
      </div>
    </section>
    <HowItWorks />
    <Features />
    <Footer/>
  </div>
  );
};

export default LandingPage;
