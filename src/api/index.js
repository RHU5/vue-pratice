import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createApiConfig() {
    return axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });
}

function createApiConfigWithAuth(url) {
    const api = axios.create({
        baseURL: `${process.env.VUE_APP_API_URL}/${url}`,
    });

    return setInterceptors(api);
}

export const api = createApiConfig();
export const posts = createApiConfigWithAuth('posts');
