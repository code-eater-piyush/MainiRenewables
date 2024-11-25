import './mission.css'

import {FaTree, FaTint, FaRecycle, FaCogs } from 'react-icons/fa';
import './mission.css';

const Mission = () => {
  return (
    <section id='mission'>
       <div className="mission">
      <div className="mission-container">
        <h1>Our Designs</h1>
        <div className="mission-content">
          <div className="mission-item">
            <FaCogs className="mission-icon" />
            <h2>Proprietary blade design</h2>
            <p>Innovative, Efficient, and Eco-Friendly: Harnessing the Power of Renewable Energy with Proprietary Blade Design</p>
          </div>
          <div className="mission-item">
            <FaRecycle className="mission-icon" />
            <h2>High Recyclability</h2>
            <p>High recyclability: turning waste into resources for a sustainable future</p>
          </div>
          <div className="mission-item">
            <FaTree size={50} className="mission-icon" />
            <h2>Ecofriendly</h2>
            <p>Harnessing clean energy through innovative turbine design for a sustainable future</p>
          </div>
          <div className="mission-item">
            <FaTint size={50} className="mission-icon" />
            <h2>Low Flow Compatible</h2>
            <p>Engineered for efficiency: low flow compatibility for optimal performance</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Mission;
