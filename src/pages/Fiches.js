import React, { useState } from 'react';
import './Fiches.css';

function Fiches() {
  const [selectedSubject, setSelectedSubject] = useState('math');

  const fiches = {
    math: [
      { id: 1, title: 'Algebra Basics', level: 'Collège', description: 'Learn fundamental algebra concepts' },
      { id: 2, title: 'Geometry Fundamentals', level: 'Collège', description: 'Introduction to geometric shapes' },
      { id: 3, title: 'Calculus I', level: 'Lycée', description: 'Limits and derivatives' },
    ],
    physics: [
      { id: 4, title: 'Motion & Forces', level: 'Collège', description: 'Understanding Newton\'s laws' },
      { id: 5, title: 'Energy & Power', level: 'Collège', description: 'Energy transformations' },
      { id: 6, title: 'Electricity & Magnetism', level: 'Lycée', description: 'Advanced electromagnetic theory' },
    ],
    biology: [
      { id: 7, title: 'Cell Structure', level: 'Collège', description: 'Understanding cells' },
      { id: 8, title: 'Genetics Basics', level: 'Collège', description: 'DNA and inheritance' },
      { id: 9, title: 'Evolution & Natural Selection', level: 'Lycée', description: 'Evolution theory' },
    ],
  };

  const subjects = [
    { key: 'math', name: '📐 Mathematics' },
    { key: 'physics', name: '⚛️ Physics-Chemistry' },
    { key: 'biology', name: '🧬 Biology & SVT' },
  ];

  return (
    <main className="fiches">
      <div className="container">
        <h1>Study Fiches</h1>
        <p className="subtitle">Download comprehensive study materials</p>

        <div className="subject-filter">
          {subjects.map((subject) => (
            <button
              key={subject.key}
              className={`filter-btn ${selectedSubject === subject.key ? 'active' : ''}`}
              onClick={() => setSelectedSubject(subject.key)}
            >
              {subject.name}
            </button>
          ))}
        </div>

        <div className="fiches-list">
          {fiches[selectedSubject].map((fiche) => (
            <div key={fiche.id} className="fiche-item">
              <div className="fiche-content">
                <h3>{fiche.title}</h3>
                <p className="fiche-level">Level: {fiche.level}</p>
                <p className="fiche-description">{fiche.description}</p>
              </div>
              <div className="fiche-actions">
                <button className="download-btn">📥 Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Fiches;
