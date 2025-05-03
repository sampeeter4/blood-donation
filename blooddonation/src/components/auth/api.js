import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerDonor = async (donorData) => {
  try {
    const response = await API.post('/donors/register', donorData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add more API functions as needed