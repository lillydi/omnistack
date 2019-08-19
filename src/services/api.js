import axios from 'axios';

const api = axios.create({
    baseURL : process.env.URL_APP 
//     baseURL : process.env.URL_APP || 'http://localhost:3333'
});

export default api;
