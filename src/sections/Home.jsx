// src/sections/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h1 className="home-headline">
          Hello, I'm <span className="highlight">Ashwin Kumar</span>.
        </h1>
        <p className="home-subheadline">
          I am a Full-Stack Developer who builds engaging and scalable web applications.
        </p>
        <div className="home-cta-buttons">
          <a href="#projects" className="cta-button primary">View My Work</a>
          <a href="mailto:ashwinkumarak970@gmail.com" className="cta-button secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
