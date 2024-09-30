import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My College</h1>
      <p>This is the home of excellence in education.</p>

      <div className="features">
        <div className="feature-card">
          <h2>Quality Education</h2>
          <p>Our institution offers top-notch programs that prepare students for success.</p>
        </div>
        <div className="feature-card">
          <h2>Experienced Faculty</h2>
          <p>Learn from the best! Our faculty members are experts in their fields.</p>
        </div>
        <div className="feature-card">
          <h2>Student Life</h2>
          <p>Join a vibrant community with various extracurricular activities and events.</p>
        </div>
      </div>

      <div className="cta-section p-color">
        <h2>Join Us Today!</h2>
        <p>Be a part of our legacy of excellence. Apply now and shape your future.</p>
        <button className="cta-button">Apply Now</button>
      </div>
    </div>
  );
}

export default Home;
