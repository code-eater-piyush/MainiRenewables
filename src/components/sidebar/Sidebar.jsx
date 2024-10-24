import { Link } from 'react-router-dom';
import "./sidebar.css";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/mission" onClick={toggleMenu}>Mission</Link></li>
        <li><Link to="/vision" onClick={toggleMenu}>Vision</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
