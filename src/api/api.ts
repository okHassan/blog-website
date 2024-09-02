// lib/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.server,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;