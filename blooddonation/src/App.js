import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; 
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './AppRoutes';
import theme from './utils/theme';
import './assets/styles/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/blood-donation"> 
        <AuthProvider>
          <div className="app">
            <AppRoutes />
          </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
