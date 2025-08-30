import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      title: "Project One",
      description: "Coming soon...",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Project Two",
      description: "Coming soon...",
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div className="app">
      <header>
        <h1>Ashwin Kumar</h1>
        <p>Full-Stack Developer | <a href="mailto:ashwinkumarak970@gmail.com">ashwinkumarak970@gmail.com</a> | <a href="https://www.linkedin.com/in/ashwin-kumar-b32b74202/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/ashwinkumar-ak" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate full-stack developer with experience in building web applications
            using modern technologies. I enjoy solving complex problems and creating intuitive,
            user-friendly digital experiences.
          </p>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Aswhwin Kumar. Built from scratch with React.</p>
      </footer>
    </div>
  );
}

export default App;
