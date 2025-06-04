import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="custom-footer">
      <div className="footer-container">
        {/* Left: Office Address */}
        <div className="footer-left">
  <h3 className="footer-heading">Office Address</h3>
  <p>Training & Placement Cell</p>
  <p>University College of Engineering Osmania University</p>
  <p>Osmania University main Road, Amberpet, Hyderabad - 500044</p>

  {/* Google Map Embed */}
  <div className="map-container"> 
    <iframe
      title="TPO UCEOU Location"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.415413080698!2d78.518535!3d17.406803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999f886defc7%3A0xadc58ab3b9104ad7!2sCollege%20of%20Engineering%20Osmania%20University!5e0!3m2!1sen!2sin!4v1744566861257!5m2!1sen!2sin"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


        {/* Right: Contact Info + TPO Info */}
        <div className="footer-right">
          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-subheading">Contact</h3>
            <p>
              Email:{" "}
              <a href="mailto:osmaniaplacement@gmail.com" className="footer-link">
                osmaniaplacement@gmail.com
              </a>
            </p>
            <p>Phone: +91-83319-97313</p>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* TPO Info */}
          <div className="footer-section">
            <h3 className="footer-subheading">TPO Information</h3>
            <p>Dr.D.Suman</p>
            <p>Training & Placement Officer</p>
            <p>
              Email:{" "}
              <a href="mailto:ouceplacements@osmania.ac.in" className="footer-link">
              ouceplacements@osmania.ac.in
              </a>
            </p>
            <p>Phone: +91-88978-55138</p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} UCEOU. All rights reserved.
        Made by CSE Students, UCEOU
      </div>
    </footer>
  );
};

export default Footer;
