// src/sections/ResearchPapers.jsx
import React from 'react';
import './ResearchPapers.css';

const papersData = [
  {
    title: "Applying Neural Imaging and ML to OCD Severity Prediction",
    authors: "Ashwin Kumar",
    publication: "IEEE Explore Mar 1, 2023",
    link: "https://ieeexplore.ieee.org/document/10053257"
  },
];

const ResearchPapers = () => {
  return (
    <section id="research" className="research-section">
      <h2>Research & Publications</h2>
      <div className="papers-list">
        {papersData.map((paper, index) => (
          <div key={index} className="paper-card">
            <h3 className="paper-title">{paper.title}</h3>
            <p className="paper-authors">{paper.authors}</p>
            <p className="paper-publication">{paper.publication}</p>
            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-link">
              Read Paper →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPapers;
