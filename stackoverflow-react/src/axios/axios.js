import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// function to make API requests
export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Example usage in other components
// const fetchDataExample = async () => {
//   try {
//     const data = await fetchData('/users');
//     console.log('Fetched data:', data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// fetchDataExample();
