import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.name}
        </Typography>
        <Typography paragraph>
          This is your donor dashboard. Here you can manage your donations, view
          upcoming campaigns, and update your profile.
        </Typography>
      </Box>
    </Container>
  );
};

export default DashboardPage;