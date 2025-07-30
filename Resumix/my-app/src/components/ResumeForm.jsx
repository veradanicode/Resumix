import React from 'react';

function ResumeForm({ data, setData }) {
  const updateExperience = (index, field, value) => {
    const updated = [...data.experience];
    updated[index][field] = value;
    setData({ ...data, experience: updated });
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data.education];
    updated[index][field] = value;
    setData({ ...data, education: updated });
  };

  return (
    <div>
      <h2>Personal Info</h2>
      <input
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      <textarea
        placeholder="Summary"
        value={data.summary}
        onChange={(e) => setData({ ...data, summary: e.target.value })}
      />

      <h2>Experience</h2>
      {data.experience.map((exp, index) => (
        <div key={index}>
          <input
            placeholder="Role"
            value={exp.role}
            onChange={(e) => updateExperience(index, 'role', e.target.value)}
          />
          <input
            placeholder="Company"
            value={exp.company}
            onChange={(e) => updateExperience(index, 'company', e.target.value)}
          />
          <input
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => updateExperience(index, 'duration', e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) => updateExperience(index, 'description', e.target.value)}
          />
        </div>
      ))}

      <h2>Education</h2>
      {data.education.map((edu, index) => (
        <div key={index}>
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
          />
          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => updateEducation(index, 'institution', e.target.value)}
          />
          <input
            placeholder="Year"
            value={edu.year}
            onChange={(e) => updateEducation(index, 'year', e.target.value)}
          />
        </div>
      ))}

      <h2>Skills</h2>
      <textarea
        placeholder="e.g. JavaScript, React, Node.js"
        value={data.skills}
        onChange={(e) => setData({ ...data, skills: e.target.value })}
      />
    </div>
  );
}
export default ResumeForm;
