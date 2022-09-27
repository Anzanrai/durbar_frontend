import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import durbarlogo from '../images/durbar-logo.png';
function Home() {
  return (
    <div>
      <div className="main-section">
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
        <div className="main-nav-wrapper">
          <div>
            <Link className="main-link-item">MENU</Link>
          </div>
          <div>
            <Link className="main-link-item">BOOK</Link>
          </div>
          <div>
            <Link className="main-link-item">ORDER</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
