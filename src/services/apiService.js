import axios from 'axios';

export const fetchClients = async () => {
  const response = await axios.get('/api/clients');
  return response.data;
};

export const createClient = async (clientData) => {
  const response = await axios.post('/api/clients', clientData);
  return response.data;
};
