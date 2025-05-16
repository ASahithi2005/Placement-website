import React from "react";
import "../Styles/RecruitersGrid.css";

import amazonLogo from "../assets/logos/amazon.png";
import infosysLogo from "../assets/logos/infosys.png";
import thomsonLogo from "../assets/logos/thomson.png";
import oracleLogo from "../assets/logos/oracle.png";
import cognizantLogo from "../assets/logos/cognizant.png";
import swiggyLogo from "../assets/logos/swiggy.png";
import lntLogo from "../assets/logos/lnt.png";
import pegalogo from "../assets/logos/Pegasystems.png";
import darwinlogo from "../assets/logos/darwinbox.png";

// Duplicate the list to make the scroll seamless
const recruiters = [
  { name: "Amazon", logo: amazonLogo },
  { name: "Infosys", logo: infosysLogo },
  { name: "Thomson Reuters", logo: thomsonLogo },
  { name: "Oracle", logo: oracleLogo },
  { name: "Cognizant", logo: cognizantLogo },
  { name: "Swiggy", logo: swiggyLogo },
  { name: "L&T", logo: lntLogo },
  { name: "Pega Systems", logo: pegalogo},
  { name: "Darwin box", logo: darwinlogo}
];

const RecruitersGrid = () => {
  const extendedRecruiters = [...recruiters, ...recruiters]; // For seamless loop

  return (
    <section id="recruiters" className="recruiters-section">
      <h2 className="recruiters-title">Our Past Recruiters</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          {extendedRecruiters.map((company, index) => (
            <div key={index} className="recruiter-card">
              <img
                src={company.logo}
                alt={company.name}
                className="recruiter-logo"
              />
              <p className="recruiter-name">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersGrid;

