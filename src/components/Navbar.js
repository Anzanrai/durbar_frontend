import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import durbarlogo from '../images/durbar-logo.png';

function Navbar() {
  return (
    <div>
      <div className="nav-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img
              src={durbarlogo}
              alt="logo"
              style={{ width: 100, height: 100 }}
            />
          </Link>
        </div>
        <div className="link-wrapper">
          <Link to="/" className="link-item">
            Home
          </Link>
          <Link to="/services" className="link-item">
            Services
          </Link>
          <Link to="/contact" className="link-item">
            Contact
          </Link>
          <Link to="/signin" className="link-item">
            Members
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
