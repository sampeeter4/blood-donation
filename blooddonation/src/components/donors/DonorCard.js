import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const DonorCard = ({ donor }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{donor.name}</Typography>
        <Typography>Blood Group: {donor.bloodGroup}</Typography>
        <Typography>Location: {donor.location}</Typography>
        <Typography>Last Donation: {donor.lastDonationDate || 'N/A'}</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" size="small" sx={{ mr: 1 }}>
            Contact
          </Button>
          <Button variant="outlined" size="small">
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DonorCard;