import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const DonorFilter = ({ onFilter }) => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ bloodGroup, location });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        select
        label="Blood Group"
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
        sx={{ mr: 2, minWidth: 120 }}
      >
        <MenuItem value="">All</MenuItem>
        {bloodGroups.map((group) => (
          <MenuItem key={group} value={group}>
            {group}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default DonorFilter;