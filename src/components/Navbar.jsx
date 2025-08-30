// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa'; // Import hamburger/close icons
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Ashwin Kumar
        </a>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="nav-right-section">
        {/* Navigation Menu */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={closeMenu}>Technical Skills</a>
          </li>
          <li className="nav-item">
            <a href="#research" className="nav-link" onClick={closeMenu}>Research Papers</a>
          </li>
          <li className="nav-item">
            <a href="#miscellaneous" className="nav-link" onClick={closeMenu}>Miscellaneous</a>
          </li>
          <li className="nav-item">
            <a href="#connect" className="nav-link" onClick={closeMenu}>Connect</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          </li>
           {/* Mobile-only Resume Button */}
          <li className="nav-item nav-item-mobile">
            <a
              href="./Resume.pdf"
              download="AshwinKumar_Resume.pdf"
              title="Dowload Resume"
              className="resume-button mobile"
            >
              <FaDownload />
            </a>
          </li>
        </ul>

        {/* Desktop-only Resume Button */}
        <a
          href="./Resume.pdf"
          download="AshwinKumar_Resume.pdf"
          title="Dowload Resume"
          className="resume-button desktop"
        >
          <FaDownload />
        </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
