import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import durbarlogo from '../images/durbar-logo.png';

function Navbar() {
  let isAuthenticated = useState(!!localStorage.getItem('jwt') ? true : false);
  // useEffect(() => {
  //   if (localStorage.getItem('jwt')) {
  //     isAuthenticated = true;
  //   }
  // }, []);
  const renderMembers = () => {
    if (localStorage.getItem('jwt')) {
      return (
        <Link to="/" className="link-item" onClick={signout}>
          Signout
        </Link>
      );
    }
    return (
      <Link to="/signin" className="link-item">
        Members
      </Link>
    );
  };
  const signout = () => {
    localStorage.removeItem('jwt');
  };

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
          {renderMembers()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
