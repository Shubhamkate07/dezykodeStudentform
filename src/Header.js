import React, { useState } from "react";
import { FaHome, FaPhoneAlt } from 'react-icons/fa'; // Importing icons from react-icons
import "./Header.css"; // Add styles in Header.css


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">My Website</a>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/">
              <FaHome /> Home
            </a>
          </li>
          {/* <li><a href="/about">About</a></li> */}
          {/* <li><a href="/services">Services</a></li> */}
          <li>
            <a href="/contact">
              <FaPhoneAlt /> Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
