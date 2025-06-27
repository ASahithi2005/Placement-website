import React from 'react';
import '../Styles/Statistics.css';
import img1 from '../assets/statistics/new1.jpg';
import img2 from '../assets/statistics/new2.jpg';
; // Add your Word doc path here

const Statistics = () => {
  return (
    <section className="stats-section" id="statistics">
      <h1 className="stats-title"><b>Our Impact in Numbers</b></h1>
      <div className="stats-container">
        <img src={img1} alt="Stat 1" />
        <img src={img2} alt="Stat 2" />
      </div>
      
      {/* More Info Button */}
      <div className="more-info-container">
        <a href="/PlacementStats.docx" target="_blank" rel="noopener noreferrer" className="more-info-button">
          More Info
        </a>
      </div>
    </section>
  );
};

export default Statistics;