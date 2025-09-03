import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ResumeForm from './components/ResumeForm';
import Features from './components/features';
import HowItWorks from './components/HowItWorks';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume-form" element={<ResumeForm />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </>
  );
}

export default App;
