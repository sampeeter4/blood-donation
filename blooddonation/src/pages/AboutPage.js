import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        About NSS Blood Donation
      </Typography>
      <Typography paragraph>
        Information about the NSS Blood Donation initiative will go here.
      </Typography>
    </Container>
  );
};

export default AboutPage;