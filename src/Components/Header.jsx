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
        <RouterLink to="/" className="logo">
          <img src={logo} alt="UCEOU Logo" className="logo-img" />
          <span className="logo-text">UCEOU Placements</span>
        </RouterLink>

        {/* Desktop Menu */}
        <nav className="nav">
          <RouterLink to="/" className="nav-item">HOME</RouterLink>
          {[
            { id: "achievements", label: "ACHIEVEMENTS" },
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
              className="nav-item"
            >
              {item.label}
            </ScrollLink>
          ))}
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
            <RouterLink to="/" className="mobile-nav-item" onClick={() => setIsOpen(false)}>HOME</RouterLink>
            {[
              { id: "tpo-info", label: "TPO INFO" },
              { id: "why-recruit", label: "WHY RECRUIT" },
              { id: "achievements", label: "ACHIEVEMENTS" },
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
          </nav>

          <img src={logo} alt="UCEOU Logo" className="logo-img" />
        </div>
      )}
    </header>
  );
};

export default Header;
