import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import ResumeForm from './components/ResumeForm'
import Templates from './components/templates';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Templates />} />
        <Route path="/resume-form" element={<ResumeForm />} />
    
      </Routes>
    </Router>
    
  )
}

export default App
