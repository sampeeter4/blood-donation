import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box,
  Grid,
  Card,
  Avatar
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Favorite,
  People,
  LocalHospital,
  ArrowForward
} from '@mui/icons-material';

const HomePage = () => {
  const features = [
    {
      icon: <Favorite fontSize="large" color="error" />,
      title: "Save Lives",
      description: "Your donation can save up to 3 lives"
    },
    {
      icon: <People fontSize="large" color="primary" />,
      title: "Join Our Community",
      description: "Connect with thousands of donors across Kerala"
    },
    {
      icon: <LocalHospital fontSize="large" color="success" />,
      title: "Emergency Response",
      description: "Be there when someone needs blood urgently"
    }
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ 
        my: 8, 
        textAlign: 'center',
        py: 6,
        px: 2,
        borderRadius: 2,
        backgroundColor: 'background.paper',
        boxShadow: 1
      }}>
        <Avatar sx={{ 
          bgcolor: 'primary.main', 
          width: 80, 
          height: 80,
          mx: 'auto',
          mb: 3
        }}>
          <Favorite fontSize="large" />
        </Avatar>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to <span style={{ color: '#d32f2f' }}>LIFE</span> Blood Donation
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          Join Kerala's life-saving network today
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button 
            variant="contained" 
            size="large" 
            component={Link}
            to="/register"
            sx={{ 
              px: 4,
              bgcolor: '#d32f2f',
              '&:hover': { bgcolor: '#9a0007' }
            }}
            endIcon={<ArrowForward />}
          >
            Register as Donor
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            component={Link}
            to="/campaigns"
            sx={{ px: 4 }}
          >
            View Campaigns
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Why Donate With Us?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                p: 3, 
                height: '100%',
                textAlign: 'center',
                borderTop: '4px solid',
                borderColor: 'primary.main'
              }}>
                <Avatar sx={{ 
                  bgcolor: 'transparent', 
                  color: 'primary.main',
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2
                }}>
                  {feature.icon}
                </Avatar>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ 
        my: 8, 
        p: 4, 
        textAlign: 'center',
        backgroundColor: 'primary.light',
        borderRadius: 2
      }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to make a difference?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          It only takes 30 minutes to become someone's hero
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          component={Link}
          to="/register"
          sx={{ 
            px: 6,
            bgcolor: '#d32f2f',
            '&:hover': { bgcolor: '#9a0007' }
          }}
        >
          Join Now
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;