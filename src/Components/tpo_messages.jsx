import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import principal from "../assets/people/principal.jpg";
import tpohead from "../assets/people/tpo-head.jpg";
import "../Styles/tpo_messages.css"; // Updated CSS

const messages = [
  {
    name: "Prof Chandra Shekhar",
    designation: "Principal, UCEOU",
    content:
      "We take pride in shaping students into competent, confident professionals ready to contribute meaningfully to the industry. Our curriculum, combined with hands-on training and dedicated faculty, ensures our graduates are job-ready and adaptable. To recruiters, we offer a pool of talented individuals prepared to meet your organizational goals. To students, I encourage you to pursue excellence with integrity and passion.",
    image: principal,
  },
  {
    name: "Dr. D. Suman",
    designation: "Training & Placement Officer",
    content:
      "Our focus at the Training and Placement Cell is to equip students with industry-relevant skills and expose them to real-world challenges through internships, workshops, and recruiter interactions. We believe placements are not just about jobs, they’re about launching careers. We work closely with both students and companies to ensure a smooth, meaningful placement process. Recruiters will find enthusiastic, well-prepared candidates; students will find a platform to grow, adapt, and shine.",
    image: tpohead,
  },
];

const MessagesSection = () => {
  return (
    <section id="messages" className="messages-section">
      <h2 className="messages-heading">Messages from TPO</h2>{" "}
      <div className="carousel-container">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={700}
          emulateTouch={true}
          centerMode={false}
          centerSlidePercentage={100}
          width="100%"
        >
          {messages.map((message, index) => (
            <div key={index} className="message-card">
              <div className="message-image-container">
                <img
                  src={message.image}
                  alt={message.name}
                  className="message-image"
                />
              </div>
              <div className="message-text">
                <h3 className="message-name">{message.name}</h3>
                <p className="message-designation">{message.designation}</p>
                <p className="message-content">{message.content}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MessagesSection;
