import { useState } from "react";
import "./partners.css";

const PartnersPage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [partners, setPartners] = useState([]); // To store partners dynamically

  const partnersData = {
    incubation: [
      "https://static.wixstatic.com/media/1bf77c_7bee8ba9cdfd45418d3338f52de7e724~mv2.png/v1/fill/w_299,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png",
      "https://static.wixstatic.com/media/1bf77c_d0b50892c3794c9aa7df535faf20b3ad~mv2.jpg/v1/fill/w_130,h_130,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Venture%20center.jpg",
      "https://static.wixstatic.com/media/1bf77c_6fc1d6b133ae4873aef3afeb0d98e535~mv2.png/v1/fill/w_243,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image%20(1).png",
      "https://static.wixstatic.com/media/1bf77c_41bb04a2b420456bad8f13a43e50b207~mv2.png/v1/fill/w_209,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/climate%20collective.png"
    ],
    grants: [
      "https://static.wixstatic.com/media/1bf77c_0815980406f547788cb51023d573812b~mv2.jpg/v1/fill/w_178,h_138,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SISFS_JPG.jpg",
      "https://static.wixstatic.com/media/1bf77c_d90c2bb29ac34139996a3da2b9a91625~mv2.jpg/v1/fill/w_273,h_111,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-HDFC-Bank-SmartUp-Grants-2021-MediaBrief_edited.jpg",
      "https://static.wixstatic.com/media/1bf77c_3ccf90c192f14875ab5b70f0335d4d35~mv2.png/v1/fill/w_134,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cummins.png",
      "https://static.wixstatic.com/media/1bf77c_78f41977ea0647ab9d4f06711226da61~mv2.jpg/v1/fill/w_273,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CPI%20logo.jpg",
      "https://static.wixstatic.com/media/1bf77c_f4ce4dfba4e14d9988133c5a5fa959c5~mv2.png/v1/fill/w_218,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bahrat%20seats.png"
    ],
    advisors: [
      "https://static.wixstatic.com/media/1bf77c_6695dd57a2ff4ab1ba448cbe0ffde17b~mv2.png/v1/fill/w_125,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NITI-Aayog-logo_edited.png",
      "https://static.wixstatic.com/media/1bf77c_b3b076574c7a4ed898681dd940bc36d2~mv2.jpg/v1/fill/w_144,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_for_National_Institute_of_Ocean_Technology.jpg",
      "https://static.wixstatic.com/media/1bf77c_72880cce63434be9bf4b9f3e80c8676e~mv2.png/v1/fill/w_119,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Indian_Institute_of_Technology_Roorkee_logo.png",
      "https://static.wixstatic.com/media/1bf77c_f0771cea050749b59ee05e59943eebf2~mv2.png/v1/fill/w_173,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Startup%20India%20Logo1-02_edited.png"
    ],
  };

  const toggleOptions = (type) => {
    setPartners(partnersData[type]); // Update partners based on the button clicked
    setShowOptions(!showOptions); // Toggle the popup visibility
  };

  const closePopup = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setShowOptions(false);
    }
  };

  return (
    <div className="container">
      <div className={`partners-page ${showOptions ? "blurred-background" : ""}`}>
        <div className="partners-header">
          <div className="left-section">
            <h2>Partners & Team</h2>
            <h3>Collaborative Excellence: Building Bridges, Driving Success</h3>
          </div>
          <div className="right-section">
            <p>
              Empowering partnerships and fostering teamwork to achieve
              unparalleled excellence. Our dedicated approach and shared vision
              create a synergy that fuels innovation and drives sustainable success
              for all.
            </p>
          </div>
        </div>
        <div className="partners-bottom-section">
          <div className="partners-grid">
            <div className="partner-card" onClick={() => toggleOptions('incubation')}>
              Incubation & Acceleration
            </div>
            <div className="partner-card" onClick={() => toggleOptions('grants')}>
              Granting Organizations
            </div>
            <div className="partner-card" onClick={() => toggleOptions('advisors')}>
              Advisors & Knowledge
            </div>
          </div>
          <div className="partners-network">
            <h4>Join the partners network</h4>
            <button className="become-partner-btn">Become a partner →</button>
          </div>
        </div>
      </div>

      {/* Backdrop and Popup */}
      <div className={` backdrop ${showOptions ? "show" : ""}`} onClick={closePopup}>
        {showOptions && (
          <div className={`popup-options ${showOptions ? "show" : ""}`}>
            <div className="partners-list">
              {partners.map((partner, index) => (
                <img key={index} src={partner} alt={`Partner ${index}`} className="partner-image"/>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersPage;
