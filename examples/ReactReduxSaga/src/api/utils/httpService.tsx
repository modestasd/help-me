import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_BASE,
});

//interceptors to be added

export default axiosInstance;
