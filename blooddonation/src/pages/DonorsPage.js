import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  MenuItem, 
  Button, 
  Box,
  Grid,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import { Search as SearchIcon, LocationOn } from '@mui/icons-material';

// Kerala districts
const keralaDistricts = [
  'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha',
  'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur',
  'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad',
  'Kannur', 'Kasaragod'
];

// Mock donor data with Kerala locations
const mockDonors = [
  { id: 1, name: 'Arun Kumar', bloodGroup: 'A+', district: 'Thiruvananthapuram', lastDonation: '2023-05-15', availability: 'Available' },
  { id: 2, name: 'Deepa Nair', bloodGroup: 'B-', district: 'Ernakulam', lastDonation: '2023-06-20', availability: 'Available' },
  { id: 3, name: 'Vijay Menon', bloodGroup: 'O+', district: 'Kozhikode', lastDonation: '2023-04-10', availability: 'Not Available' },
  { id: 4, name: 'Anjali Pillai', bloodGroup: 'AB+', district: 'Thrissur', lastDonation: '2023-07-01', availability: 'Available' },
  { id: 5, name: 'Suresh Gopi', bloodGroup: 'A-', district: 'Kannur', lastDonation: '2023-03-25', availability: 'Available' },
  { id: 6, name: 'Meera Nair', bloodGroup: 'B+', district: 'Alappuzha', lastDonation: '2023-08-10', availability: 'Available' },
];

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const DonorsPage = () => {
  const [searchParams, setSearchParams] = useState({
    bloodGroup: '',
    district: ''
  });
  const [filteredDonors, setFilteredDonors] = useState(mockDonors);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    const results = mockDonors.filter(donor => {
      const bloodMatch = searchParams.bloodGroup ? donor.bloodGroup === searchParams.bloodGroup : true;
      const districtMatch = searchParams.district ? 
        donor.district.toLowerCase() === searchParams.district.toLowerCase() : true;
      return bloodMatch && districtMatch;
    });
    setFilteredDonors(results);
  };

  const handleReset = () => {
    setSearchParams({ bloodGroup: '', district: '' });
    setFilteredDonors(mockDonors);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ 
        color: 'primary.main', 
        fontWeight: 'bold',
        textAlign: 'center',
        mb: 4
      }}>
        Kerala Blood Donors Network
      </Typography>
      
      {/* Search Section */}
      <Box sx={{ 
        p: 3, 
        mb: 4, 
        borderRadius: 2, 
        boxShadow: 1,
        backgroundColor: 'background.paper'
      }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <LocationOn color="primary" sx={{ mr: 1 }} /> 
          Find Donors in Kerala
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <TextField
              select
              fullWidth
              label="Blood Group"
              name="bloodGroup"
              value={searchParams.bloodGroup}
              onChange={handleSearchChange}
            >
              <MenuItem value="">All Blood Groups</MenuItem>
              {bloodGroups.map(group => (
                <MenuItem key={group} value={group}>{group}</MenuItem>
              ))}
            </TextField>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <TextField
              select
              fullWidth
              label="District"
              name="district"
              value={searchParams.district}
              onChange={handleSearchChange}
            >
              <MenuItem value="">All Districts</MenuItem>
              {keralaDistricts.map(district => (
                <MenuItem key={district} value={district}>{district}</MenuItem>
              ))}
            </TextField>
          </Grid>
          
          <Grid item xs={12} md={2} sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
              fullWidth
            >
              Search
            </Button>
          </Grid>
        </Grid>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button
            variant="text"
            onClick={handleReset}
          >
            Clear Filters
          </Button>
        </Box>
      </Box>

      {/* Results Section */}
      <Typography variant="h6" gutterBottom sx={{ 
        mb: 3,
        display: 'flex',
        alignItems: 'center'
      }}>
        {filteredDonors.length} Donors Found in Kerala
      </Typography>
      
      {filteredDonors.length === 0 ? (
        <Box sx={{ 
          textAlign: 'center', 
          p: 4,
          backgroundColor: 'background.default',
          borderRadius: 2
        }}>
          <Typography variant="body1" color="text.secondary">
            No donors found matching your criteria.
          </Typography>
          <Button 
            variant="text" 
            onClick={handleReset}
            sx={{ mt: 2 }}
          >
            Show all donors
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredDonors.map(donor => (
            <Grid item xs={12} sm={6} md={4} key={donor.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderLeft: donor.availability === 'Available' ? '4px solid #4caf50' : '4px solid #f44336'
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ 
                      bgcolor: donor.availability === 'Available' ? 'success.main' : 'error.main',
                      mr: 2,
                      width: 40,
                      height: 40
                    }}>
                      {donor.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" component="div">
                        {donor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {donor.district}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1
                  }}>
                    <Typography variant="body2">
                      <strong>Blood Group:</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {donor.bloodGroup}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1
                  }}>
                    <Typography variant="body2">
                      <strong>Last Donated:</strong>
                    </Typography>
                    <Typography variant="body2">
                      {new Date(donor.lastDonation).toLocaleDateString()}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 2
                  }}>
                    <Typography variant="body2" sx={{ 
                      color: donor.availability === 'Available' ? 'success.main' : 'error.main',
                      fontWeight: 'bold'
                    }}>
                      {donor.availability}
                    </Typography>
                    
                    <Button 
                      size="small" 
                      variant={donor.availability === 'Available' ? 'contained' : 'outlined'}
                      color="primary"
                      disabled={donor.availability !== 'Available'}
                      sx={{ ml: 2 }}
                    >
                      Contact
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default DonorsPage;