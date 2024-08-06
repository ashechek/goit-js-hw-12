import axios from 'axios';

export default async function createHttpRequest(options) {
  try {
    const response = await axios.get('https://pixabay.com/api/', options);
    return response.data;
  } catch (error) {
    throw error;
  }
}
