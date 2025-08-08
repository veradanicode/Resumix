import React, { useState } from 'react';
import './ResumeForm.css';
import { FiUser, FiBookOpen, FiBriefcase, FiCpu, FiFolder, FiFileText, FiCheckCircle } from 'react-icons/fi';


const steps = [
  'Basic Info',
  'Education',
  'Experience',
  'Skills',
  'Projects',
  'Summary',
  'Finish'
];
const stepIcons = [
  <FiUser />,
  <FiBookOpen />,
  <FiBriefcase />,
  <FiCpu />,
  <FiFolder />,
  <FiFileText />,
  <FiCheckCircle />
];

const ResumeForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="resume-wrapper">
      <div className="mint-background"></div>

      <div className="resume-content">
        <div className="resume-topbar">
          <h2>Resumix</h2>
          
        </div>

        <div className="resume-form-wrapper">
          
          <div className="sidebar">
            <ul>
              {steps.map((step, index) => (
                <li
                  key={step}
                  className={
                    index === currentStep
                      ? 'active'
                      : index < currentStep
                      ? 'completed'
                      : ''
                  }
                >
                  <span className="icon">{stepIcons[index]}</span>
                  <span className="step-text">{step}</span>
                </li>
              ))}
            </ul>

          </div>

          
          <div className="form-content">
            <div className="form-header">
              <h3>{steps[currentStep]}</h3>
              
            </div>

            
            
        {currentStep === 0 && (
          <>
            <div className="form-grid">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="input-group">
                <label>Job Title</label>
                <input type="text" placeholder="Job Title" />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />  
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Email Address" />  
              </div>
              <div className="input-group">
                <label>Location</label>
                <input type="text" placeholder="Location (City, Country)" /> 
              </div>
              <div className="input-group">
                <label>Linkedin URL</label>
                <input type="text" placeholder="LinkedIn URL" />
              </div>
              
            </div>

          </>
        )}


        {currentStep === 1 && (
          <div className="form-grid">
            <div className="input-group">
                <label>School Name</label>
                <input type="text" placeholder="School Name" />
            </div>
              <div className="input-group">
                <label>Degree</label>
                <input type="text" placeholder="Degree" />
            </div>
            <div className="input-group">
                <label>Field of Study</label>
                <input type="text" placeholder="Field of Study" />
            </div>
              <div className="input-group">
                <label>Start year</label>
                <input type="text" placeholder="Start Year" />
            </div>
            <div className="input-group">
                <label>End year</label>
              <input type="text" placeholder="End Year" />
            </div>
          </div>
        )}


        {currentStep === 2 && (
          <div className="form-grid">
             <div className="input-group">
                <label>Company Name</label>
               <input type="text" placeholder="Company Name" />
            </div>
            <div className="input-group">
                <label>Job Title</label>
               <input type="text" placeholder="Job Title" />
            </div>
            <div className="input-group">
                <label>Location</label>
               <input type="text" placeholder="Location" />
            </div>
             <div className="input-group">
                <label>Start Date</label>
               <input type="text" placeholder="Start Date" />
            </div>
             <div className="input-group">
                <label>End Date</label>
               <input type="text" placeholder="End Date" />
            </div>
            <div className="input-group">
                <label>Key Responsibilities</label>
               <input type="text" placeholder="Key Responsibilities / Achievements" />
            </div>
            
          </div>
        )}

        {/* Step 3: Skills */}
        {currentStep === 3 && (
          <div className="form-grid">
            <input type="text" placeholder="Skill 1" />
            <input type="text" placeholder="Skill 2" />
            <input type="text" placeholder="Skill 3" />
            <input type="text" placeholder="Skill 4" />
            <input type="text" placeholder="Skill 5" />
            <input type="text" placeholder="Skill 6" />
          </div>
        )}

        {/* Step 4: Projects */}
        {currentStep === 4 && (
          <div className="form-grid">
            <input type="text" placeholder="Project Title" />
            <input type="text" placeholder="Project Description" />
            <input type="text" placeholder="Tools Used" />
            <input type="text" placeholder="Project Link (GitHub or Live)" />
          </div>
        )}

        {/* Step 5: Summary */}
        {currentStep === 5 && (
          <div className="form-grid">
            <textarea placeholder="Write a brief summary about yourself" rows="6" style={{ width: '100%' }}></textarea>
          </div>
        )}

        {/* Step 6: Finish */}
        {currentStep === 6 && (
          <div className="form-grid">
            <p>You're done! 🎉</p>
            <p>Click 'Download Resume' to generate your document.</p>
            <button className="download-btn">Download Resume</button>
          </div>
        )}

            <div className="nav-buttons">
              <button className="back-btn" onClick={handleBack}>Back</button>
              <button className="next-btn" onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
