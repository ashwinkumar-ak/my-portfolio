// src/sections/Experience.jsx
import React from 'react';
import './Experience.css';


const experienceData = [
  {
    role: "Software Developer Engineer",
    company: "Orange Business",
    period: "Aug 2023 – Present",
    description: "Worked as network device monitoring and management tool developer. Developed features for the web applications ",
    skills: ["Python", "Java", "SpringBoot", "Maven", "SQL", "Oracle DB", "Linux", "Git", "Computer Networking", "SDWAN", "Cisco Meraki", "Juniper", "Cisco", "Riverbed", "Capgemni", "Ciena", "Network Monitoring Tools"]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{job.role}</h3>
              <p className="experience-period">{job.period}</p>
            </div>
            <h4 className="experience-company">{job.company}</h4>
            <p className="experience-description">{job.description}</p>
            <div className="experience-skills">
              {job.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
