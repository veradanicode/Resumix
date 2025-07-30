import React from 'react';

export default function LandingPage({ onStart }) {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#F9FAFB', minHeight: '100vh', minWidth: '100vw' }}>
      <header style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#1F2937' }}>ResumeMix</h1>
        <p style={{ fontSize: '1.2rem', color: '#6B7280' }}>
          Mix, match, and build your perfect resume in minutes.
        </p>
        <button
          onClick={onStart}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Start Building
        </button>
      </header>

      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1F2937' }}>Why ResumeMix?</h2>
        <ul style={{ listStyle: 'none', padding: 0, color: '#4B5563' }}>
          <li>✅ No login. No hassle.</li>
          <li>✅ Choose from multiple templates.</li>
          <li>✅ Download PDF instantly.</li>
        </ul>
      </section>

      <footer style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>
        <p>Made with 💻 by <a href="https://github.com/veradanicode" style={{ color: '#3B82F6' }}>veradanicode</a></p>
      </footer>
    </div>
  );
}
