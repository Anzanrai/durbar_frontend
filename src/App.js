import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AdminRoute from './components/AdminRoute';
import AddMenu from './pages/AddMenu';
import AddStaff from './pages/AddStaff';
import AdminProfileUpdate from './pages/AdminProfileUpdate';

const theme = createTheme({
  palette: {
    orange: {
      light: '#fd984c',
      main: '#fd7f20',
      dark: '#e3721c',
    },
    redorange: {
      light: '#fc574c',
      main: '#fc2e20',
      dark: '#e2291c',
    },
    amber: {
      light: '#f1c232',
      main: '#fdb750',
      dark: '#ffac32',
    },
    black: {
      light: '#5b5b5b',
      main: '#010100',
      dark: '#000000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route
              path="user/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="admin/dashboard"
              element={
                <PrivateRoute>
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="admin/add-menu"
              element={
                <PrivateRoute>
                  <AdminRoute>
                    <AddMenu />
                  </AdminRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="admin/add-staff"
              element={
                <PrivateRoute>
                  <AdminRoute>
                    <AddStaff />
                  </AdminRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="admin/profile-update"
              element={
                <PrivateRoute>
                  <AdminRoute>
                    <AdminProfileUpdate />
                  </AdminRoute>
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
