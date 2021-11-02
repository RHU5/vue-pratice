import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export function registerUser(userData) {
    return api.post('signup', userData);
}
