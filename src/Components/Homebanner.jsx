import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "../Styles/HomeBanner.css";
import videoSrc from "../assets/banner1.mp4";
import img1 from "../assets/MainBanner.jpg";
import img2 from "../assets/VcCongratsBanner.png";

const HomeBanner = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => navigate("/student-login");
  const handleRecruiterClick = () => navigate("/recruiter-login");

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {/* Slide 1: Video */}
      <div>
        <div className="banner-container">
          <video className="banner-video" autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
          <div className="banner-content">
            <h1 className="banner-title">
              One Platform for <span className="highlight">Placements</span> &{" "}
              <span className="highlight">Internships</span>
            </h1>
            <p className="banner-text">
              Connecting students, recruiters, and coordinators to streamline the hiring process.
            </p>
            {/* <div className="banner-buttons">
              <button className="btn" onClick={handleStudentClick}>Student</button>
              <button className="btn" onClick={handleRecruiterClick}>Recruiter</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Slide 2: Image */}
      <div>
        <div className="banner-container">
          <img src={img1} alt="Slide 2" className="banner-video" />
          
          
        </div>
      </div>

      {/* Slide 3: Another Image */}
      <div>
        <div className="banner-container">
          <img src={img2} alt="Slide 3" className="banner-video" />
         
        </div>
      </div>
    </Slider>
  );
};

export default HomeBanner;
