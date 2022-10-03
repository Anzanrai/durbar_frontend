import React from 'react';
import { isAdmin } from '../apis/auth';
import { Navigate } from 'react-router-dom';

function AdminRoute({ children }) {
  if (isAdmin()) {
    return children;
  } else {
    <Navigate to="/" />;
  }
}

export default AdminRoute;
