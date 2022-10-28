import React from 'react';
import './AdminpageHeader.css';
import logo from '../images/durbar-logo.png';

function AdminpageHeader() {
  return (
    <div className="header-wrapper">
      <div className="image-wrapper">
        <img className="image-container" src={logo} alt="logo" />
      </div>
      <div className="header-content">Admin Dashboard</div>
    </div>
  );
}

export default AdminpageHeader;
