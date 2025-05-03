import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',      // Deep red
      light: '#ff6659',     // Lighter red
      dark: '#9a0007',      // Darker red
      contrastText: '#fff', // White text
    },
    secondary: {
      main: '#f5f5f5',      // Off-white
      contrastText: '#212121', // Dark text
    },
    error: {
      main: '#f44336',      // Error red
    },
    background: {
      default: '#f5f5f5',   // Light background
      paper: '#ffffff',     // White cards/paper
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      color: '#d32f2f',
    },
    button: {
      textTransform: 'none', // Buttons won't be all uppercase
    },
  },
});

export default theme;