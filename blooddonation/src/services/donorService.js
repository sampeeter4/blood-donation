import axios from 'axios';

const API_URL = 'http://localhost:5000/api/donors';

export const getDonors = async (filters = {}) => {
  const response = await axios.get(API_URL, { params: filters });
  return response.data;
};

export const registerDonor = async (donorData) => {
  const response = await axios.post(API_URL, donorData);
  return response.data;
};

export const updateDonor = async (id, donorData) => {
  const response = await axios.put(`${API_URL}/${id}`, donorData);
  return response.data;
};