import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline, IoClose } from 'react-icons/io5';
import Sidebar from '../sidebar/Sidebar';
import './navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarHeight = navbarRef.current.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  const toggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar-container">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleMenu} />
      <div className="navbar" ref={navbarRef}>
        <div className="menu-list">
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="hamburger-icon" onClick={toggleMenu}>
            {isSidebarOpen ? (
              <IoClose className="cross" />
            ) : (
              <IoReorderThreeOutline />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;