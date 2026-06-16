import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className="home">
      <div className="container">
        <div className="hero">
          <h1>Welcome to Roua Study</h1>
          <p className="tagline">Your Gateway to Academic Excellence</p>
          <p className="description">
            Roua Study is a comprehensive platform designed to help students succeed 
            in their academic journey. Access quality study materials, organized courses, 
            and valuable resources for both collège and lycée students.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link to="/fiches" className="btn btn-secondary">View Fiches</Link>
          </div>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Study Materials</h3>
            <p>Access comprehensive study fiches for all subjects</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Organized Courses</h3>
            <p>Courses for collège and lycée students</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚗️</div>
            <h3>Multiple Subjects</h3>
            <p>Math, Physics-Chemistry, Biology & SVT</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Learn Better</h3>
            <p>Interactive and easy-to-understand content</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
