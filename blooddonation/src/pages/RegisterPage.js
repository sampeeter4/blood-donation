import React from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Avatar,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { 
  Phone, 
  LocationOn, 
  Visibility, 
  VisibilityOff,
  Favorite, // Blood drop icon alternative
  Person,
  Cake,
  Transgender
} from '@mui/icons-material';

const keralaDistricts = [
  'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha',
  'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur',
  'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad',
  'Kannur', 'Kasaragod'
];

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const RegisterPage = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    bloodGroup: '',
    district: '',
    age: '',
    gender: '',
    showPassword: false,
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Life Donor Registration:', formData);
    // Add your form submission logic here
  };

  const togglePasswordVisibility = () => {
    setFormData(prev => ({
      ...prev,
      showPassword: !prev.showPassword
    }));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ 
        mt: 2, 
        p: 4, 
        boxShadow: 3, 
        borderRadius: 4,
        backgroundColor: 'background.paper',
        borderTop: '4px solid #d32f2f'
      }}>
        {/* Project Logo/Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar sx={{ 
            bgcolor: '#d32f2f', 
            width: 70, 
            height: 70,
            mx: 'auto',
            mb: 2
          }}>
            <Favorite fontSize="large" />
          </Avatar>
          <Typography variant="h3" component="h1" sx={{ 
            color: '#d32f2f',
            fontWeight: 'bold',
            fontFamily: '"Roboto Condensed", sans-serif'
          }}>
            LIFE
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Kerala Blood Donation Network
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: 'text.primary' }}>
            Register once, save lives forever
          </Typography>
        </Box>
        
        {/* Registration Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Column 1 */}
            <Grid item xs={12} md={6}>
              {/* Full Name */}
              <TextField
                name="fullName"
                label="Full Name"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                  placeholder: "Eg: Arun Kumar"
                }}
              />
              
              {/* Email */}
              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Eg: arun@gmail.com"
              />
              
              {/* Password */}
              <TextField
                name="password"
                label="Password"
                type={formData.showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end"
                      >
                        {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              {/* Age */}
              <TextField
                name="age"
                label="Age"
                type="number"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.age}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Cake />
                    </InputAdornment>
                  ),
                  inputProps: { 
                    min: 18, 
                    max: 65 
                  }
                }}
              />
            </Grid>
            
            {/* Column 2 */}
            <Grid item xs={12} md={6}>
              {/* Phone */}
              <TextField
                name="phone"
                label="WhatsApp Number"
                type="tel"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                  inputProps: {
                    pattern: "[0-9]{10}",
                    title: "10-digit number please"
                  },
                  placeholder: "Eg: 9847123456"
                }}
              />
              
              {/* Blood Group */}
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Blood Group</InputLabel>
                <Select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  label="Blood Group"
                  onChange={handleChange}
                >
                  {bloodGroups.map(group => (
                    <MenuItem key={group} value={group}>
                      {group}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              {/* District */}
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Home District</InputLabel>
                <Select
                  name="district"
                  value={formData.district}
                  label="Home District"
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  }
                >
                  {keralaDistricts.map(district => (
                    <MenuItem key={district} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              {/* Gender */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  label="Gender"
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Transgender />
                      </InputAdornment>
                    )
                  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                  <MenuItem value="prefer-not-to-say">Prefer not to say</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          
          {/* Terms and Submit */}
          <Box sx={{ mt: 3 }}>
            <FormControlLabel
              control={
                <Checkbox 
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                  color="primary"
                />
              }
              label={
                <Typography variant="body2">
                  I agree to the LIFE donor terms and confirm I meet all eligibility criteria for blood donation
                </Typography>
              }
            />
          </Box>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 2,
                bgcolor: '#d32f2f',
                '&:hover': {
                  bgcolor: '#9a0007'
                }
              }}
              disabled={!formData.termsAccepted}
            >
              Join LIFE Network
            </Button>
            
            <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
              Your information will be kept confidential and used only for blood donation purposes
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;