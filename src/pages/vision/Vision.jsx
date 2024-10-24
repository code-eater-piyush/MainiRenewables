import { FaRocket, FaGlobe, FaChartLine } from 'react-icons/fa';
import './vision.css';

const Vision = () => {
  return (
    <section id='vision'>
      <div className="vision">
      <div className="vision-container">
        <h1>Our Vision</h1>
        <p>At Brains Media Solutions, our vision is to be a leader in digital marketing, driving innovation and growth for businesses worldwide.</p>
        <div className="vision-content">
          <div className="vision-item">
            <div className="vision-icon-container">
              <FaRocket className="vision-icon" />
            </div>
            <div className="vision-text">
              <h2>Innovation</h2>
              <p>We aim to constantly push the boundaries of what&apos;s possible in digital marketing, using cutting-edge technology and creative strategies.</p>
            </div>
          </div>
          <div className="vision-item">
            <div className="vision-icon-container">
              <FaGlobe className="vision-icon" />
            </div>
            <div className="vision-text">
              <h2>Global Reach</h2>
              <p>We strive to connect businesses with audiences across the globe, breaking down barriers and creating new opportunities.</p>
            </div>
          </div>
          <div className="vision-item">
            <div className="vision-icon-container">
              <FaChartLine className="vision-icon" />
            </div>
            <div className="vision-text">
              <h2>Growth</h2>
              <p>We are dedicated to fostering sustainable growth for our clients, helping them achieve long-term success in an ever-evolving market.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Vision;
