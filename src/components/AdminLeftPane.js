import React from 'react';
import { Link } from 'react-router-dom';

import './AdminLeftPane.css';

function AdminLeftPane() {
  return (
    <div className="action-container">
      <ul>
        <Link className="action-link-style" to="/admin/add-menu">
          <li>Add Menu Item</li>
        </Link>
        <Link className="action-link-style" to="/admin/add-staff">
          <li>Add Staff Member</li>
        </Link>
        <Link className="action-link-style" to="/admin/profile-update">
          <li>Update Profile</li>
        </Link>
        <Link className="action-link-style" to="/">
          <li>Back to Home</li>
        </Link>
      </ul>
    </div>
  );
}

export default AdminLeftPane;
