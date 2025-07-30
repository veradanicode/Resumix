import React, { useState, useRef } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import ReactToPrint from 'react-to-print';

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: [{ role: '', company: '', duration: '', description: '' }],
    education: [{ degree: '', institution: '', year: '' }],
    skills: '',
  });

  const previewRef = useRef();

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      {/* Form Side */}
      <div style={{ flex: 1 }}>
        <ResumeForm data={resumeData} setData={setResumeData} />
        <ReactToPrint
          trigger={() => (
            <button
              style={{
                marginTop: '1rem',
                padding: '0.6rem 1rem',
                backgroundColor: '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Download PDF
            </button>
          )}
          content={() => previewRef.current}
        />
      </div>

      {/* Preview Side */}
      <div style={{ flex: 1, border: '1px solid #E5E7EB', padding: '1rem', background: 'white' }}>
        <ResumePreview data={resumeData} ref={previewRef} />
      </div>
    </div>
  );
}
export default ResumeBuilder;