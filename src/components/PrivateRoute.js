import React from 'react';
import { isAuthenticated } from '../apis/auth';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  if (isAuthenticated()) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
