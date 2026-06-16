import React from 'react';
import './About.css';

function About() {
  return (
    <main className="about">
      <div className="container">
        <h1>About Roua Study</h1>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Roua Study, our mission is to provide students with accessible, 
            high-quality educational resources that help them succeed academically. 
            We believe every student deserves excellent study materials and support 
            on their learning journey.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>✅ Comprehensive study fiches for collège and lycée students</li>
            <li>✅ Organized courses by level and subject</li>
            <li>✅ Quality materials in Mathematics, Physics-Chemistry, and Biology</li>
            <li>✅ Easy-to-understand content</li>
            <li>✅ Regular updates with new materials</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Roua Study was created by a passionate team of educators and developers 
            dedicated to making quality education more accessible. We're constantly 
            working to improve and expand our platform.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Roua Study?</h2>
          <div className="why-grid">
            <div className="why-item">
              <h3>🎯 Focused Content</h3>
              <p>Content tailored for exam success</p>
            </div>
            <div className="why-item">
              <h3>📱 Easy Access</h3>
              <p>Available anytime, anywhere</p>
            </div>
            <div className="why-item">
              <h3>⭐ Quality Materials</h3>
              <p>Created by experienced educators</p>
            </div>
            <div className="why-item">
              <h3>🚀 Always Growing</h3>
              <p>New content added regularly</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
