// src/sections/Projects.jsx
import React from 'react';
import './Projects.css';

// --- Your Projects Data ---
const projectsData = [
  {
    title: "Coming soon...",
    description: "Coming soon...",
    techStack: ["Coming soon..."],
    liveDemo: "#",
    sourceCode: "#"
  },
  {
    title: "Coming soon...",
    description: "Coming soon...",
    techStack: ["Coming soon..."],
    liveDemo: "#",
    sourceCode: "#"
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                Live Demo
              </a>
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
