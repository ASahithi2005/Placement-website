import React from "react";
import { Mail, FileText, CheckCircle, Code, Users, Award } from "lucide-react";
import "../Styles/Timeline.css"; // Import the CSS file



const timelineEvents = [
    { date: "May 22, onwards", title: "Student Registrations", desc: "Students are instructed to register for the placements", icon: <Mail size={28} color="#007bff" /> },
    { date: "June to September", title: "Product Based Companies", desc: "Product based companies conduct their hiring process during this time", icon: <FileText size={28} color="#007bff" /> },
    { date: "Oct to Dec", title: "Service Based Companies", desc: "Service based companies conduct their hiring process during this time", icon: <CheckCircle size={28} color="#007bff" /> },
    { date: "December onwards", title: "Core Companies", desc: "Hiring process for Core companies begins", icon: <Code size={28} color="#007bff" /> },
    ];
  
  const Timeline = () => {
    return (
      <section id="process">
      <div className="timeline-container">
        <h2 className="timeline-title">Placements Timeline</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">{event.icon}</div>
              <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                <h3>{event.title}</h3>
                <p className="date">{event.date}</p>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  };
  
  export default Timeline;