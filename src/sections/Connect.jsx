// src/sections/Connect.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFilePdf } from 'react-icons/fa';
import './Connect.css';

const connectLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashwin-kumar-b32b74202",
    icon: <FaLinkedin />,
    description: "My professional network and career history."
  },
  {
    name: "GitHub",
    url: "https://github.com/ashwinkumar-ak",
    icon: <FaGithub />,
    description: "All of my open-source projects and code."
  },
  {
    name: "Download Resume",
    url: "/my-portfolio/resume.pdf",
    icon: <FaFilePdf />,
    description: "A downloadable version of my full resume."
  }
];

const Connect = () => {
  return (
    <section id="connect" className="connect-section">
      <h2>Let's Connect</h2>
      <p className="connect-subtitle">
        Find me on the web, or download my resume.
      </p>
      <div className="connect-grid">
        {connectLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-card"
          >
            <div className="connect-icon">{link.icon}</div>
            <div className="connect-text">
              <h4>{link.name}</h4>
              <p>{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Connect;
