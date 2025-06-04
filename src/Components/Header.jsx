import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../Styles/Header.css";
import logo from "../assets/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo - Routes to homepage */}
        <div className="logo">
          <a
            href="https://uceou.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="UCEOU Logo" className="logo-img" />
          </a>
          <div className="logo-text-container">
            <span className="logo-text">Training & Placement Office</span>
            <span className="logo-subtext">
              University College of Engineering, Osmania University
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="nav">
          <RouterLink to="/" className="nav-item">
            Home
          </RouterLink>
          {[
            { id: "messages", label: "Messages" },
            { id: "process", label: "Timeline" },
            { id: "statistics", label: "Statistics" },
            { id: "recruiters", label: "Recruiters" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="nav-item"
            >
              {item.label}
            </ScrollLink>
          ))}
          {/* Brochure Link */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            Brochure
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <RouterLink
              to="/"
              className="mobile-nav-item"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </RouterLink>
            {[
              { id: "messages", label: "MESSAGES" },
              { id: "process", label: "PROCESS" },
              { id: "statistics", label: "STATISTICS" },
              { id: "recruiters", label: "RECRUITERS" },
              { id: "contact", label: "CONTACT" },
            ].map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="mobile-nav-item"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
            {/* Mobile Brochure Link */}

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-item"
              onClick={() => setIsOpen(false)}
            >
              Brochure
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
