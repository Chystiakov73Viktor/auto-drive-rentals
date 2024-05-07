import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_TEST;

axios.defaults.baseURL = `https://${API_KEY}.mockapi.io`;

export const fetchGetCars = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};

export const fetchAddCar = async (car) => {
  const response = await axios.post('/adverts', car);
  return response.data;
};

export const fetchDeleteCar = async id => {
  const response = await axios.delete(`/adverts/${id}`);
  return response.data;
};
