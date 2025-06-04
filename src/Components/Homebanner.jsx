import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "../Styles/HomeBanner.css";
import videoSrc from "../assets/banner1.mp4";
import img1 from "../assets/carousel-imgs/1.jpeg";
import img2 from "../assets/carousel-imgs/2.jpeg";
import img3 from "../assets/carousel-imgs/3.jpeg";
import img4 from "../assets/carousel-imgs/4.jpeg";
import img5 from "../assets/carousel-imgs/5.jpeg";
import img6 from "../assets/carousel-imgs/6.jpeg";

const HomeBanner = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    window.open("https://uceou.in/EAF/Student/Default", "_blank");
  };
  
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
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="home-banner-wrapper">
      <Slider {...settings}>
        {/* Video Slide */}
        <div className="slide-container">
          <div className="banner-container">
            <video className="banner-media" autoPlay loop muted playsInline>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay dark-overlay"></div>
            <div className="banner-content">
              <h1 className="banner-title">
                One Platform for <span className="highlight">Placements</span> &{" "}
                <span className="highlight">Internships</span>
              </h1>
              <p className="banner-text">
                Connecting students, recruiters, and coordinators to streamline the hiring process.
              </p>
              <div className="banner-buttons">
                <button className="btn student-btn" onClick={handleStudentClick}>Student Login</button>
                {/* <button className="btn recruiter-btn" onClick={handleRecruiterClick}>Recruiter Login</button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Image Slides */}
        {[img1, img2, img3, img4, img5, img6].map((img, index) => (
          <div className="slide-container" key={index}>
            <div className="banner-container image-slide">
              <img 
                src={img} 
                alt={`Campus Activity ${index + 1}`} 
                className="centered-image"
              />
              <div className="overlay blue-overlay"></div>
              <div className="banner-content">
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;