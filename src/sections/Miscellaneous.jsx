// src/sections/Miscellaneous.jsx
import React from 'react';
import './Miscellaneous.css';

const softSkillsData = [
  "Effective Communication", "Team Collaboration", "Problem Solving",
  "Agile Methodologies", "Leadership", "Adaptability", "Creativity"
];

const languagesData = [
  { name: "English", proficiency: "Professional" },
  { name: "Hindi", proficiency: "Native / Bilingual" },
  { name: "Punjabi", proficiency: "Native / Bilingual" }
];

const Miscellaneous = () => {
  return (
    <section id="miscellaneous" className="misc-section">
      <h2>Miscellaneous</h2>
      <div className="misc-grid">
        {/* Soft Skills Card */}
        <div className="misc-card">
          <h3>Soft Skills</h3>
          <div className="soft-skills-container">
            {softSkillsData.map((skill, index) => (
              <span key={index} className="misc-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* Languages Card */}
        <div className="misc-card">
          <h3>Languages</h3>
          <table className="languages-table">
            <tbody>
              {languagesData.map((lang, index) => (
                <tr key={index}>
                  <td>{lang.name}</td>
                  <td>{lang.proficiency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Miscellaneous;
