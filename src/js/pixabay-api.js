import axios from 'axios';

const API_KEY = '45071357-999033ebbf151b40dc2c05ece';
const BASE_URL = 'https://pixabay.com/api/';

export default async function createHttpRequest(options) {
  try {
    const response = await axios.get(BASE_URL, options);
    return response.data;
  } catch (error) {
    throw error;
  }
}