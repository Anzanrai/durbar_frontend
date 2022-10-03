import React, { useState } from 'react';
import './AdminDashboard.css';

import AdminpageHeader from '../components/AdminpageHeader';

import AdminLeftPane from '../components/AdminLeftPane';

function AdminDashboard() {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem('jwt')).username
  );
  return (
    <div>
      <div className="page-wrapper">
        <AdminpageHeader />
        <div className="admin-dashboard-container">
          <AdminLeftPane />
          <div className="content-container">
            <h2>Hello {username},</h2>
            <h3>Welcome to the admin dashboard.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
