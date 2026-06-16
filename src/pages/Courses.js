import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  const [selectedLevel, setSelectedLevel] = useState('college');

  const courses = {
    college: [
      { id: 1, name: 'Mathematics - Collège', subject: 'Math', description: 'Algebra, Geometry, and more' },
      { id: 2, name: 'Physics & Chemistry - Collège', subject: 'Physics', description: 'Basic physics and chemistry' },
      { id: 3, name: 'Biology & SVT - Collège', subject: 'Biology', description: 'Life sciences basics' },
    ],
    lycee: [
      { id: 4, name: 'Advanced Mathematics', subject: 'Math', description: 'Calculus, Advanced Algebra' },
      { id: 5, name: 'Physics & Chemistry - Advanced', subject: 'Physics', description: 'Complex physics concepts' },
      { id: 6, name: 'Biology & Ecology', subject: 'Biology', description: 'Advanced life sciences' },
    ],
  };

  return (
    <main className="courses">
      <div className="container">
        <h1>Our Courses</h1>
        <p className="subtitle">Choose your level and explore our courses</p>

        <div className="level-selector">
          <button
            className={`level-btn ${selectedLevel === 'college' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('college')}
          >
            Collège
          </button>
          <button
            className={`level-btn ${selectedLevel === 'lycee' ? 'active' : ''}`}
            onClick={() => setSelectedLevel('lycee')}
          >
            Lycée
          </button>
        </div>

        <div className="courses-grid">
          {courses[selectedLevel].map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h3>{course.name}</h3>
                <span className="subject-badge">{course.subject}</span>
              </div>
              <p className="course-description">{course.description}</p>
              <button className="course-btn">Explore Course</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Courses;
