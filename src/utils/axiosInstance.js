// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Set the base URL from environment variable
    timeout: 30000, // Optional: Set a timeout for requests (10 seconds here)
    headers: {
        'Content-Type': 'application/json', // Set default content type
    },
});

export default axiosInstance;

