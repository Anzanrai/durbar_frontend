import React from 'react';
import './AddMenu.css';
import './AdminDashboard.css';
import AdminpageHeader from '../components/AdminpageHeader';
import AdminLeftPane from '../components/AdminLeftPane';

function AdminProfileUpdate() {
  return (
    <div className="page-wrapper">
      <AdminpageHeader />
      <div className="admin-dashboard-container">
        <AdminLeftPane />
        <div className="content-container"></div>
      </div>
    </div>
  );
}

export default AdminProfileUpdate;
