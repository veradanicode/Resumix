import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume-form" element={<ResumeForm />} />
      </Routes>
    </>
  );
}

export default App;
