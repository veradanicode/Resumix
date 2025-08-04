import React, { useState } from 'react';
import './ResumeForm.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaTools } from 'react-icons/fa';

const ResumeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('resumix-data', JSON.stringify(formData));
    navigate('/templates');
  };

  return (
    <div className="form-wrapper">
        <div className="bg-art">
           <img src="/bg-doodle.png" alt="decor" />
        </div>
      <form className="resume-form" onSubmit={handleSubmit}>
        <h2>Build Your Resume</h2>

        <div className="form-section">
          <h3>👤 Personal Info</h3>
          <div className="form-row">
            <div className="input-group">
              <FaUser />
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <FaEnvelope />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <FaPhone />
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <FaMapMarkerAlt />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>🎓 Education</h3>
          <div className="input-group textarea">
            <FaGraduationCap />
            <textarea name="education" placeholder="School, Degree, Year..." value={formData.education} onChange={handleChange} rows="3" />
          </div>
        </div>

        <div className="form-section">
          <h3>💼 Experience</h3>
          <div className="input-group textarea">
            <FaBriefcase />
            <textarea name="experience" placeholder="Job role, company, responsibilities..." value={formData.experience} onChange={handleChange} rows="3" />
          </div>
        </div>

        <div className="form-section">
          <h3>🛠 Skills</h3>
          <div className="input-group textarea">
            <FaTools />
            <textarea name="skills" placeholder="E.g. JavaScript, React, Figma..." value={formData.skills} onChange={handleChange} rows="2" />
          </div>
        </div>

        <button type="submit">Continue to Templates →</button>
      </form>
    </div>
  );
};

export default ResumeForm;
