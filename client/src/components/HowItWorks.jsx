import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Fill Out Your Details',
    description: 'Provide your personal, education, work experience, and skills information in our simple form.',
    icon: '📝',
  },
  {
    title: 'Choose a Template',
    description: 'Browse through our professionally designed templates and pick the one that suits you best.',
    icon: '📄',
  },
  {
    title: 'Download Your Resume',
    description: 'Export your resume as a clean, ATS-friendly PDF in just one click.',
    icon: '⬇️',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" >
      <h2 className="hiw-heading">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
