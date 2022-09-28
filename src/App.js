import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
