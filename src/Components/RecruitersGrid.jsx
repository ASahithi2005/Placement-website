import React from "react";
import "../Styles/RecruitersGrid.css";

import Academor from "../assets/logos/Academor.png";
import Aiken from "../assets/logos/Aiken.png";
import amazonLogo from "../assets/logos/amazon.png";
import AmsOsram from "../assets/logos/AmsOsram.png";
import Arcadislbi from "../assets/logos/ArcadisIbi.png";
import arcesium  from "../assets/logos/arcesium.png";
import Ariqt from "../assets/logos/Ariqt.png";
import AsianPaintsLogo from "../assets/logos/AsianPaints.png";
import Avana from "../assets/logos/Avana.png";

import BranicLogo from "../assets/logos/Branic.png";
import Bel from "../assets/logos/Bel.png";
import Bgr from "../assets/logos/Bgr.png";

import CandescentLogo from "../assets/logos/candescent.png";
import cognizantLogo from "../assets/logos/cognizant.png";
import Coramandal from "../assets/logos/Coramandal.png";
import CtrlsCloudLogo from "../assets/logos/Ctrls&Cloud4c.png";

import Daikin from "../assets/logos/Daikin.png";
import darwinlogo from "../assets/logos/darwinbox.png";
import DEShawLogo from "../assets/logos/DEShaw.png";
import Deloitte from "../assets/logos/Deloitte.png";

import Ediglobe from "../assets/logos/Ediglobe.png";
import Emagia from "../assets/logos/Emagia.png";
import EnneaLogo from "../assets/logos/Ennea.png";
import Excelr from "../assets/logos/ExcelR.png";

import GeAppliances from "../assets/logos/GeAppliances.png";
import Grantley from "../assets/logos/Grantley.png";

import HSBCLogo from "../assets/logos/HSBC.png";
import Hyundai from "../assets/logos/Hyundai.png";
import Hexagon from "../assets/logos/Hexagon.png";
import Hugosave from "../assets/logos/Hugosave.png";
import HyderabadRunners from "../assets/logos/HyderabadRunners.png";

import infosysLogo from "../assets/logos/infosys.png";
import Itc from "../assets/logos/Itc.png";
import Intel from "../assets/logos/Intel.png";
import Icomm  from "../assets/logos/Icomm.png";

import juspay from "../assets/logos/juspay.png";
import Jr from "../assets/logos/Jr.png";
import jordan  from "../assets/logos/jordan.png";

import KS from "../assets/logos/KS.png";
import Khetpilot from "../assets/logos/Khetpilot.png";
import Ki_tech from "../assets/logos/Ki_tech.png";
import Kodnest from "../assets/logos/Kodnest.png";

import lntLogo from "../assets/logos/lnt.png";

import Magnaquest from "../assets/logos/Magnaquest.png";
import Medha from "../assets/logos/Medha.png";
import Medtronic from "../assets/logos/Medtronic.png";
import Moschip from "../assets/logos/Moschip.png";
import Meslova from "../assets/logos/Meslova.png";

import Ncc from "../assets/logos/Ncc.png";

import oracleLogo from "../assets/logos/oracle.png";
import OsiDigital from "../assets/logos/OsiDigital.png";

import pegalogo from "../assets/logos/Pegasystems.png";
import PinnacleReliability from "../assets/logos/PinnacleReliability.png";
import ProTeam from "../assets/logos/ProTeam.png";
import Pythian from "../assets/logos/Pythian.png";

import QSpiders from "../assets/logos/QSpiders.png";
import Reliance_Industries from "../assets/logos/Reliance_Industries.png";
import Rinex from "../assets/logos/Rinex.png";

import Schwing from "../assets/logos/Schwing.png";
import Shapoorji from "../assets/logos/Shapoorji.png";
import Smarted from "../assets/logos/Smarted.png";
import Solix from "../assets/logos/Solix.png";
import SusheeCoalMine from "../assets/logos/SusheeCoalMine.png";
import swiggyLogo from "../assets/logos/swiggy.png";

import Teachnook from "../assets/logos/Teachnook.png";
import thomsonLogo from "../assets/logos/thomson.png";
import Transgraph from "../assets/logos/Transgraph.png";
import TejasNetwork from "../assets/logos/tejas_network.png";
import TechMindsparc from "../assets/logos/TechMindsparc.png";

import Unistring from "../assets/logos/Unistring.png";

import Zessta from "../assets/logos/Zessta.png";


// Duplicate the list to make the scroll seamless
const recruiters = [
  { name: "Academor", logo: Academor },
  { name: "Aiken Healthcare", logo: Aiken },
  { name: "Amazon", logo: amazonLogo },
  { name: "Ams Osram", logo: AmsOsram },
  { name: "Arcadis- Ibi", logo: Arcadislbi },
  { name: "Arcesium", logo: arcesium },
  { name: "Ariqt International", logo: Ariqt },
  { name: "Avana Medical", logo: Avana },
  { name: "Asian Paints", logo: AsianPaintsLogo},

  { name: "Bel", logo: Bel },
  { name: "Branic Tech Solutions Pvt Ltd", logo: BranicLogo},
  { name: "Bgr Mining & Infra Limited", logo: Bgr },

  { name: "Candescent - Ncrvoyix", logo: CandescentLogo},
  { name: "Ctrls & Cloud4c", logo: CtrlsCloudLogo},
  { name: "Coramandel", logo: Coramandal},
  { name: "Cognizant", logo: cognizantLogo },

  { name: "Darwinbox Digital Solutions", logo: darwinlogo},
  { name: "D.E Shaw", logo: DEShawLogo},
  { name: "Daikin", logo: Daikin},
  { name: "Deloitte", logo: Deloitte},

  { name: "Ennea", logo: EnneaLogo},
  { name: "Ediglobe", logo: Ediglobe},
  { name: "Emagia Corporation", logo: Emagia},
  { name: "Excelr Edtech Pvt. Ltd", logo: Excelr},

  { name: "Ge Appliances", logo: GeAppliances},
  { name: "Grantley", logo: Grantley},

  { name: "HSBC", logo: HSBCLogo},
  { name: "Hyundai Motors(Be)", logo: Hyundai},
  { name: "Hexagon", logo: Hexagon},
  { name: "Hugosave", logo: Hugosave},
  { name: "Hyderabad Runners", logo: HyderabadRunners},

  { name: "Infosys", logo: infosysLogo },
  { name: "ITC", logo: Itc},
  { name: "Intel", logo: Intel },
  { name: "Icomm", logo: Icomm },

  { name: "Juspay", logo: juspay},
  { name: "Jr Seamless Pvt Ltd", logo: Jr},
  { name: "Jordan Classic", logo: jordan},

  { name: "K&S Partners", logo: KS},
  { name: "Khetpilot Ai Agri Drone Tech Pvt Ltd", logo: Khetpilot},
  { name: "Ki-Tech Pvt Ltd", logo: Ki_tech},
  { name: "Kodnest", logo: Kodnest},

  { name: "L&T", logo: lntLogo },

  { name: "Magnaquest", logo: Magnaquest},
  { name: "Medha Servo", logo: Medha},
  { name: "Medtronic Engineering & Innovation Center", logo: Medtronic},
  { name: "Moschip", logo: Moschip},
  { name: "Meslova", logo: Meslova},

  { name: "NCC", logo: Ncc},

  { name: "Oracle", logo: oracleLogo },
  { name: "Osi Digital", logo: OsiDigital},

  { name: "Pega System", logo: pegalogo},
  { name: "Pinnacle Reliability", logo: PinnacleReliability},
  { name: "Pro Team Serve ", logo: ProTeam},
  { name: "Pythian", logo: Pythian},

  { name: "QSpiders", logo: QSpiders},

  { name: "Reliance Industries Limited", logo: Reliance_Industries},
  { name: "Rinex", logo: Rinex },

  { name: "Swiggy", logo: swiggyLogo },
  { name: "Schwing Stetter", logo: Schwing },
  { name: "Shapoorji Pallonji And Company Private Limited (E & C)", logo: Shapoorji },
  { name: "Smarted", logo: Smarted },
  { name: "Solix Technologies", logo: Solix },
  { name: "Sushee Chandragupt Coal Mine", logo: SusheeCoalMine },

  { name: "Thomson Reuters", logo: thomsonLogo },
  { name: "Transgraph", logo: Transgraph},
  { name: "Teachnook", logo: Teachnook},
  { name: "Tejas Networks", logo: TejasNetwork},
  { name: "Tech Mindsparc Innovations", logo: TechMindsparc},


  { name: "Unistring", logo: Unistring},

  { name: "Zessta", logo: Zessta},  
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

