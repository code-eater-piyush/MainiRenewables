import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are committed to providing excellent service and innovative solutions. Learn more about our mission and values.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <ul>
            <li><a href="mailto:info@brainsmedia.com">info@brainsmedia.com</a></li>
            <li><a href="tel:+911234567890">+91 1234567890</a></li>
            <li><a href="#location">1234 Street, City, Country</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/brainsmediasolutions" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://x.com/brainsmedia2012" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/Brains_Media_Solutions/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/brains-media-solutions-pvt-ltd-/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Brains Media Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
