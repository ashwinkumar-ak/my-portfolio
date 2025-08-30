// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Experience from './sections/Experience';
import TechnicalSkills from './sections/TechnicalSkills';
import ResearchPapers from './sections/ResearchPapers';
import Miscellaneous from './sections/Miscellaneous';
import Projects from './sections/Projects';
import Connect from './sections/Connect';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Home />
        <Experience />
        <TechnicalSkills />
        <ResearchPapers />
        <Miscellaneous />
        <Projects />
        <Connect />
      </div>
      <footer>
        <p>&copy; 2025 Ashwin Kumar. Built with React.</p>
      </footer>
    </>
  );
}

export default App;
