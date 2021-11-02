import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createApiConfig() {
    const api = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });

    return setInterceptors(api);
}

const api = createApiConfig();

export function registerUser(userData) {
    return api.post('signup', userData);
}

export function loginUser(userData) {
    return api.post('login', userData);
}
