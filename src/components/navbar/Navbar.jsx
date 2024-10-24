import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';
import Sidebar from '../sidebar/Sidebar';
import logo from '../../assets/Maini-Renewables_Final.webp'
import "./navbar.css";

const Navbar = ({ toggleMenu }) => {
  return (
    <div className="navbar-container">
      <Sidebar />
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-list">
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <ul>
            <li>
              <IoReorderThreeOutline onClick={toggleMenu} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
