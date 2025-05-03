import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, backgroundColor: 'primary.dark', color: 'white' }}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} NSS Blood Donation. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        <i>"Every drop counts - Save a life today!"</i>
      </Typography>
    </Box>
  );
};

export default Footer;