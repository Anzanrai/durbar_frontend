import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="main-section">
        <div className="landing-section">
          <Navbar />
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
    </div>
  );
}

export default Home;
