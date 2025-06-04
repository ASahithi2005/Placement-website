import React from "react";
import "../Styles/Tpo_info.css"; // Import the CSS file
import image from "../assets/college.png"; // Import the image

const Tpo_info = () => {
  return (
    <section id =" "className="tpo-container">
      <div className="tpo-content">
        {/* Left Side - Image */}
        <div className="tpo-image">
          <img src={image} alt="College Building" />
        </div>

        {/* Right Side - TPO Info */}
        <div className="tpo-info">
          <h2>Training & Placement Office</h2>
          <p>
            University College of Engineering, Osmania University, has a dedicated Training and Placement Office (TPO) that plays a pivotal role in preparing students for the competitive job market. The TPO’s primary objective is to bridge the gap between academia and industry, ensuring that students are equipped with the skills and knowledge necessary to secure best careers, and provide industry interaction for training/ Internship/ campus placements etc., counselling session for higher education and Entreprenurial opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tpo_info;
