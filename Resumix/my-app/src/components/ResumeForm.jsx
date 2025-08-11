import React, { useState } from 'react';
import './ResumeForm.css';
import { FiUser, FiBookOpen, FiBriefcase, FiCpu, FiFolder, FiFileText, FiCheckCircle } from 'react-icons/fi';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DatePickerStyles.css';

const steps = [
  'Basic Info',
  'Education',
  'Experience',
  'Skills',
  'Certifications',
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
  const [dates, setDates] = useState({
  eduStart: null,
  eduEnd: null,
  workStart: null,
  workEnd: null,
  certificateDate:null,
  });

 const [image, setImage] = useState(null);
   const [educationList, setEducationList] = useState([
    {
      school: "",
      degree: "",
      field: "",
      start: null,
      end: null,
      location: ""
    }
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

    const handleEduChange = (index, event) => {
      const updated = [...educationList];
      updated[index][field] = value;
      setEducationList(updated);
    };


  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        school: "",
        degree: "",
        field: "",
        start: null,
        end: null,
        location: ""
      }
    ]);
  };

    const handleRemove = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
  };



const handleDateChange = (key, date) => {
  setDates((prev) => ({ ...prev, [key]: date }));
};
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
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" />
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
             
              
            </div>

          </>
        )}


        {currentStep === 1 && (
          
          <div>
      {educationList.map((edu, index) => (
        <div key={index} className="form-grid">
          
          <div className="input-group">
            <label>School Name</label>
            <input
              type="text"
              placeholder="School Name"
              value={edu.school}
              onChange={(e) => handleChange(index, "school", e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Degree</label>
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Field of Study</label>
            <input
              type="text"
              placeholder="Field of Study"
              value={edu.field}
              onChange={(e) => handleChange(index, "field", e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Start Year</label>
            <DatePicker
              selected={edu.start}
              onChange={(date) => handleChange(index, "start", date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          </div>

          <div className="input-group">
            <label>End Year</label>
            <DatePicker
              selected={edu.end}
              onChange={(date) => handleChange(index, "end", date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          </div>

          <div className="input-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Location"
              value={edu.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
            />
          </div>
        </div>
      ))}
      <button
      type="button"
      onClick={() => handleRemove(index)}
      style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
          backgroundColor:"transparent",
          cursor: "pointer",
          display:"flex",
          float:"right"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="red"
        viewBox="0 0 24 24"
      >
        <path d="M3 6h18v2H3V6zm2 3h14l-1.5 14h-11L5 9zm5 2v10h2V11H10zm4 0v10h2V11h-2z" />
      </svg>
    </button>

      <button
        type="button"
        onClick={addEducation}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#4CAF93",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        + Add Education
      </button>
      
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
                <DatePicker
                       selected={dates.workStart}
                        onChange={(date) => handleDateChange("workStart",date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                  />

            </div>
             <div className="input-group">
                <label>End Date</label>
                <DatePicker
                        selected={dates.workEnd}
                        onChange={(date) => handleDateChange("workEnd",date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                  />

            </div>
            <div className="input-group">
                <label>Key Responsibilities</label>
               <input type="text" placeholder="Key Responsibilities / Achievements" />
            </div>
            
          </div>
        )}

        
        {currentStep === 3 && (
          <div className="form-grid">
            <input type="text" placeholder="Skill 1" />
            <input type="text" placeholder="Skill 2" />
            <input type="text" placeholder="Skill 3" />
            <input type="text" placeholder="Skill 4" />
           
          </div>
        )}

        
        {currentStep === 4 && (
          <div className="form-grid">
            <div className="input-group">
                <label> Title</label>
               <input type="text" placeholder="awards,certificate..." />
            </div>
            <div className="input-group">
                <label> Date</label>
                <DatePicker
                        selected={dates.certificateDate}
                        onChange={(date) => handleDateChange("certificateDate",date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                  />

            </div>
          </div>
        )}

        
        {currentStep === 5 && (
          <div className="form-grid">
            <div className='input-group1'>
                <textarea placeholder="Write a brief summary about yourself" rows="6" style={{ width: '100%' }}></textarea>
              <div className='profile'>
                <label>Upload Profile Picture   </label>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                />

              {image && (
                <div style={{ marginTop: "10px" }}>
                  <img 
                    src={image} 
                    alt="Preview" 
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                </div>
              )}
                  </div>
            </div>
            </div>

        )}
        {currentStep === 6 && (
          <div className="form-grid">
           
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
