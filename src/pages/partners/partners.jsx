import React from "react";
import "./partners.css";

const PartnersPage = () => {
  return (
    <div className="partners-page">
      <div className="partners-header">
        <div className="left-section">
          <h2>Partners & Team</h2>
          <h3>Collaborative Excellence: Building Bridges, Driving Success</h3>
        </div>
        <div className="right-section">
          <p>
            Empowering partnerships and fostering teamwork to achieve
            unparalleled excellence. Our dedicated approach and shared vision
            create a synergy that fuels innovation and drives sustainable
            success for all.
          </p>
        </div>
      </div>
     <div className="partners-bottom-section">
     <div className="partners-grid">
        <div className="partner-card">Incubation & Acceleration</div>
        <div className="partner-card">Granting Organizations</div>
        <div className="partner-card">Advisors & Knowledge</div>
      </div>
      <div className="partners-network">
        <h4>Join the partners network</h4>
        <button className="become-partner-btn">Become a partner →</button>
      </div>
     </div>
    </div>
  );
};

export default PartnersPage;
