import React from 'react';
import { Container, Typography } from '@mui/material';

const CampaignsPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Donation Campaigns
      </Typography>
      <Typography paragraph>
        This page will display upcoming blood donation campaigns.
      </Typography>
    </Container>
  );
};

export default CampaignsPage;