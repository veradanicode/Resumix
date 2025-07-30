import React, { forwardRef } from "react";

const ResumePreview = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} style={{ fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h1>{data.name}</h1>
      <p>{data.email} | {data.phone}</p>

      <h2>Summary</h2>
      <p>{data.summary}</p>

      <h2>Experience</h2>
      {data.experience.map((exp, idx) => (
        <div key={idx}>
          <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
          <p>{exp.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {data.education.map((edu, idx) => (
        <div key={idx}>
          <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
        </div>
      ))}

      <h2>Skills</h2>
      <p>{data.skills}</p>
    </div>
  );
});

export default ResumePreview;
