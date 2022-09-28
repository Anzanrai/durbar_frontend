import React, { useState, useEffect } from 'react';
import { isAuthenticated, logout } from '../apis/auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      setUser(isAuthenticated());
      // user = isAuthenticated();
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h1>User Dashboard Page.</h1>
      <p>Hello {user.username}, welcome to durbar fast food restaurant.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
