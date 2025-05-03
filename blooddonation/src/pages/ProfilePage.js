import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { updateDonor } from '../services/donorService';

const ProfilePage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodGroup: '',
    contactNumber: '',
    address: '',
  });

  useEffect(() => {
    if (user) {
      // In a real app, you would fetch the user's profile data
      setFormData({
        name: user.name || '',
        email: user.email || '',
        bloodGroup: user.bloodGroup || '',
        contactNumber: user.contactNumber || '',
        address: user.address || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDonor(user.id, formData);
      // Show success message
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Profile
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Blood Group"
            name="bloodGroup"
            fullWidth
            margin="normal"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          />
          <TextField
            label="Contact Number"
            name="contactNumber"
            fullWidth
            margin="normal"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <TextField
            label="Address"
            name="address"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.address}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
          >
            Update Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;