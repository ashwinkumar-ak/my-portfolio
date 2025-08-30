// src/sections/TechnicalSkills.jsx
import React from 'react';
import './TechnicalSkills.css';


const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Angular", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Python", "Django", "GraphQL", "RESTful APIs"]
  },
  {
    category: "Databases",
    skills: ["Oracle", "PostgreSQL", "MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git, GitHub & GitLab", "CI/CD (GitHub Actions)", "AWS (EC2, S3)", "Vite"]
  },
  {
    category: "Networking",
    skills: ["Computer Networking", "SDWAN", "Cisco Meraki", "Juniper", "Cisco", "Riverbed", "Capgemini", "Ciena", "Network Monitoring Tools"]
  },
  {
    category: "Others",
    skills: ["C/C++", "Microservices"]
  },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h3>{category.category}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
